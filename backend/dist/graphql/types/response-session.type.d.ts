import { SurveyType } from './survey.type';
import { ResponseType } from './response.type';
export declare class ResponseSessionType {
    id: string;
    surveyId: string;
    createdAt: Date;
    survey?: SurveyType;
    responses?: ResponseType[];
}
