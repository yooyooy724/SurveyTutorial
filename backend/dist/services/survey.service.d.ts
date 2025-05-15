import { Repository } from 'typeorm';
import { Survey } from '../entities/survey.entity';
import { Question } from '../entities/question.entity';
import { Choice } from '../entities/choice.entity';
import { CreateSurveyInput } from '../graphql/inputs/create-survey.input';
export declare class SurveyService {
    private surveyRepository;
    private questionRepository;
    private choiceRepository;
    constructor(surveyRepository: Repository<Survey>, questionRepository: Repository<Question>, choiceRepository: Repository<Choice>);
    findAll(): Promise<Survey[]>;
    findOneById(id: string): Promise<Survey | null>;
    findOneByUrl(url: string): Promise<Survey | null>;
    create(createSurveyInput: CreateSurveyInput): Promise<Survey>;
    private generateUniqueUrl;
}
