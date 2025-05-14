import { SurveyType } from './survey.type';
import { ChoiceType } from './choice.type';
import { ResponseType } from './response.type';
export declare class QuestionType {
    id: string;
    sentence: string;
    sortOrder: number;
    surveyId: string;
    survey?: SurveyType;
    choices?: ChoiceType[];
    responses?: ResponseType[];
}
