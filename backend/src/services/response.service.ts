import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response } from '../entities/response.entity';
import { ResponseSession } from '../entities/response-session.entity';
import { CreateResponseInput } from '../graphql/inputs/create-response.input';

@Injectable()
export class ResponseService {
  constructor(
    @InjectRepository(Response)
    private responseRepository: Repository<Response>,
    @InjectRepository(ResponseSession)
    private responseSessionRepository: Repository<ResponseSession>,
  ) {}

  async createResponse(createResponseInput: CreateResponseInput): Promise<Response> {
    // Create a new response session
    const responseSession = this.responseSessionRepository.create({
      surveyId: createResponseInput.surveyId,
    });
    
    // Save the response session to get the ID
    const savedResponseSession = await this.responseSessionRepository.save(responseSession);
    
    // Create the response
    const response = this.responseRepository.create({
      responseSessionId: savedResponseSession.id,
      questionId: createResponseInput.questionId,
      choiceId: createResponseInput.choiceId,
    });
    
    // Save and return the response
    return this.responseRepository.save(response);
  }

  async getResponsesForSurvey(surveyId: string): Promise<Response[]> {
    return this.responseRepository
      .createQueryBuilder('response')
      .innerJoinAndSelect('response.responseSession', 'responseSession')
      .innerJoinAndSelect('response.question', 'question')
      .innerJoinAndSelect('response.choice', 'choice')
      .where('responseSession.surveyId = :surveyId', { surveyId })
      .getMany();
  }

  async getResponseCountsByChoice(questionId: string): Promise<any[]> {
    const results = await this.responseRepository
      .createQueryBuilder('response')
      .select('choice.id', 'choiceId')
      .addSelect('choice.label', 'choiceLabel')
      .addSelect('COUNT(response.id)', 'count')
      .innerJoin('response.choice', 'choice')
      .where('response.questionId = :questionId', { questionId })
      .groupBy('choice.id, choice.label')
      .orderBy('choice.sortOrder', 'ASC')
      .getRawMany();
    
    // Calculate the total responses for percentage
    const totalResponses = results.reduce((sum, result) => sum + parseInt(result.count), 0);
    
    // Add percentage to each result
    return results.map(result => ({
      ...result,
      percentage: totalResponses ? (parseInt(result.count) / totalResponses) * 100 : 0,
    }));
  }
}