import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Survey } from '../entities/survey.entity';
import { Question } from '../entities/question.entity';
import { Choice } from '../entities/choice.entity';
import { CreateSurveyInput } from '../graphql/inputs/create-survey.input';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey)
    private surveyRepository: Repository<Survey>,
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(Choice)
    private choiceRepository: Repository<Choice>,
  ) {}

  async findAll(): Promise<Survey[]> {
    return this.surveyRepository.find({
      relations: ['questions', 'questions.choices'],
    });
  }

  async findOneById(id: string): Promise<Survey | null> {
    return this.surveyRepository.findOne({
      where: { id },
      relations: ['questions', 'questions.choices'],
    });
  }

  async findOneByUrl(url: string): Promise<Survey | null> {
    return this.surveyRepository.findOne({
      where: { url },
      relations: ['questions', 'questions.choices'],
    });
  }

  async create(createSurveyInput: CreateSurveyInput): Promise<Survey> {
    // Create a unique URL for the survey
    const url = this.generateUniqueUrl();
    
    // Create the survey
    const survey = this.surveyRepository.create({
      url,
      title: createSurveyInput.title,
    });
    
    // Save the survey to get the ID
    const savedSurvey = await this.surveyRepository.save(survey);
    
    // Create questions
    for (const questionInput of createSurveyInput.questions) {
      const question = this.questionRepository.create({
        surveyId: savedSurvey.id,
        sentence: questionInput.sentence,
        sortOrder: questionInput.sortOrder,
      });
      
      // Save the question to get the ID
      const savedQuestion = await this.questionRepository.save(question);
      
      // Create choices
      for (const choiceInput of questionInput.choices) {
        const choice = this.choiceRepository.create({
          questionId: savedQuestion.id,
          label: choiceInput.label,
          sortOrder: choiceInput.sortOrder,
        });
        
        // Save the choice
        await this.choiceRepository.save(choice);
      }
    }
    
    // Return the survey with all relations
    const foundSurvey = await this.findOneById(savedSurvey.id);
    if (!foundSurvey) {
      throw new Error('Failed to find created survey');
    }
    return foundSurvey;
  }

  private generateUniqueUrl(): string {
    // Generate a random string for the URL
    // In production, you might want to check if the URL already exists
    return uuidv4().substring(0, 8);
  }
}
