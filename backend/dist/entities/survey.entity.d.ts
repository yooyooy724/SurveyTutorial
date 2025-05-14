import { Question } from './question.entity';
import { ResponseSession } from './response-session.entity';
export declare class Survey {
    id: string;
    url: string;
    title?: string;
    createdAt: Date;
    questions?: Question[];
    responseSessions?: ResponseSession[];
}
