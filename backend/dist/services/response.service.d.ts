import { Repository } from 'typeorm';
import { Response } from '../entities/response.entity';
import { ResponseSession } from '../entities/response-session.entity';
import { CreateResponseInput } from '../graphql/inputs/create-response.input';
export declare class ResponseService {
    private responseRepository;
    private responseSessionRepository;
    constructor(responseRepository: Repository<Response>, responseSessionRepository: Repository<ResponseSession>);
    createResponse(createResponseInput: CreateResponseInput): Promise<Response>;
    getResponsesForSurvey(surveyId: string): Promise<Response[]>;
    getResponseCountsByChoice(questionId: string): Promise<any[]>;
}
