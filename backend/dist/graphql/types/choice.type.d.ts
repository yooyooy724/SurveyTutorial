import { QuestionType } from './question.type';
import { ResponseType } from './response.type';
export declare class ChoiceType {
    id: string;
    label: string;
    sortOrder: number;
    questionId: string;
    question?: QuestionType;
    responses?: ResponseType[];
}
