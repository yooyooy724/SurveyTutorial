import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSurveyInput } from '../graphql/inputs/create-survey.input';
import { CreateQuestionInput } from '../graphql/inputs/create-question.input';
import { CreateChoiceInput } from '../graphql/inputs/create-choice.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Survey } from '../entities/survey.entity';
import { Question } from '../entities/question.entity';
import { Choice } from '../entities/choice.entity';

@Injectable()
export class SurveyService {
  constructor(
    // コンストラクタでTypeormのRepositoryをもらう
    @InjectRepository(Survey)
    private surveyRepository: Repository<Survey>,
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(Choice)
    private choiceRepository: Repository<Choice>,
  ) {}



  async findOneById(id: string): Promise<Survey> {        // Promiss : 非同期処理
    const survey = await this.surveyRepository.findOne({
      where: { id },                                        // where: idが一致するSurvey
      relations: ['questions', 'questions.choices'],        // relations: 関連するquestionsと、questionsに関連するchoicesを一緒に取得
    });

    // nullの時に例外
    if (!survey) {
      throw new NotFoundException(`Survey with ID ${id} not found`);
    }

    return survey;
  }



  async create(createSurveyInput: CreateSurveyInput): Promise<Survey> {

    //survey--------------------------------------------------------------------------------
    const survey = this.surveyRepository.create({
      title: createSurveyInput.title,
    });
    // create: 
    // - entityのインスタンスを作る。保存はされない！
    // - newとの違いはValidationとからしい

    const savedSurvey = await this.surveyRepository.save(survey);
    // save: 
    // - 永続化（データベースへの保存）を行う
    // - 保存後に生成されたIDなどを取得できる


    //question--------------------------------------------------------------------------------
    for (const questionInput of createSurveyInput.questions) {
      const question = this.questionRepository.create({
        sentence: questionInput.sentence,
        sortOrder: questionInput.sortOrder,
        survey: savedSurvey,
      });
      const savedQuestion = await this.questionRepository.save(question);

      //question--------------------------------------------------------------------------------
      for (const choiceInput of questionInput.choices) {
        const choice = this.choiceRepository.create({
          label: choiceInput.label,
          sortOrder: choiceInput.sortOrder,
          question: savedQuestion,
        });
        await this.choiceRepository.save(choice);
      }
    }

    // ちゃんとRepo経由で返す
    return this.findOneById(savedSurvey.id);
  }

  /**
   * すべての調査を取得します
   * @returns Surveyエンティティの配列（関連するquestionsとchoicesを含む）
   */
  async findAll(): Promise<Survey[]> {
    return this.surveyRepository.find({
      relations: ['questions', 'questions.choices'],
    });
  }
}
