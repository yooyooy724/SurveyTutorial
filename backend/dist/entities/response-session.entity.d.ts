import { Survey } from './survey.entity';
import { Response } from './response.entity';
export declare class ResponseSession {
    id: string;
    surveyId: string;
    createdAt: Date;
    survey: Survey;
    responses?: Response[];
}
