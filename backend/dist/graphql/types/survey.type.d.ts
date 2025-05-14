import { QuestionType } from './question.type';
import { ResponseSessionType } from './response-session.type';
export declare class SurveyType {
    id: string;
    url: string;
    title?: string;
    createdAt: Date;
    questions?: QuestionType[];
    responseSessions?: ResponseSessionType[];
}
