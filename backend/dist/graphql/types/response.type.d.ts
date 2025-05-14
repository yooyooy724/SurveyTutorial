import { QuestionType } from './question.type';
import { ChoiceType } from './choice.type';
import { ResponseSessionType } from './response-session.type';
export declare class ResponseType {
    id: string;
    responseSessionId: string;
    questionId: string;
    choiceId: string;
    responseSession?: ResponseSessionType;
    question?: QuestionType;
    choice?: ChoiceType;
}
