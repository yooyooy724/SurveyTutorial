import { Survey } from './survey.entity';
import { Choice } from './choice.entity';
import { Response } from './response.entity';
export declare class Question {
    id: string;
    sentence: string;
    sortOrder: number;
    surveyId: string;
    survey: Survey;
    choices?: Choice[];
    responses?: Response[];
}
