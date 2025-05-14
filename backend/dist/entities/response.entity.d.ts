import { Question } from './question.entity';
import { Choice } from './choice.entity';
import { ResponseSession } from './response-session.entity';
export declare class Response {
    id: string;
    responseSessionId: string;
    questionId: string;
    choiceId: string;
    responseSession: ResponseSession;
    question: Question;
    choice: Choice;
}
