import { Question } from './question.entity';
import { Response } from './response.entity';
export declare class Choice {
    id: string;
    label: string;
    sortOrder: number;
    questionId: string;
    question: Question;
    responses?: Response[];
}
