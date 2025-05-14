import { ResponseType } from '../graphql/types/response.type';
import { ResponseService } from '../services/response.service';
import { CreateResponseInput } from '../graphql/inputs/create-response.input';
declare class ResponseCount {
    choiceId: string;
    choiceLabel: string;
    count: number;
    percentage: number;
}
export declare class ResponseResolver {
    private responseService;
    constructor(responseService: ResponseService);
    createResponse(createResponseInput: CreateResponseInput): Promise<ResponseType>;
    surveyResponses(surveyId: string): Promise<ResponseType[]>;
    responseCountsByQuestion(questionId: string): Promise<ResponseCount[]>;
}
export {};
