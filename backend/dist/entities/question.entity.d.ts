import { Survey } from './survey.entity';
import { Choice } from './choice.entity';
import { Response } from './response.entity';
export declare class Question {
    id: string;
    text: string;
    survey: Survey;
    choices?: Choice[];
    responses?: Response[];
}
