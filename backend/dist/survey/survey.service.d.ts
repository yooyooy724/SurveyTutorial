import { CreateSurveyInput } from '../graphql/inputs/create-survey.input';
import { Repository } from 'typeorm';
import { Survey } from '../entities/survey.entity';
import { Question } from '../entities/question.entity';
import { Choice } from '../entities/choice.entity';
export declare class SurveyService {
    private surveyRepository;
    private questionRepository;
    private choiceRepository;
    constructor(surveyRepository: Repository<Survey>, questionRepository: Repository<Question>, choiceRepository: Repository<Choice>);
    findOneById(id: string): Promise<Survey>;
    create(createSurveyInput: CreateSurveyInput): Promise<Survey>;
    findAll(): Promise<Survey[]>;
}
