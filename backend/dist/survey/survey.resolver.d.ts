import { SurveyType } from '../graphql/types/survey.type';
import { SurveyService } from './survey.service';
import { CreateSurveyInput } from '../graphql/inputs/create-survey.input';
export declare class SurveyResolver {
    private surveyService;
    constructor(surveyService: SurveyService);
    surveys(): Promise<SurveyType[]>;
    survey(id: string): Promise<SurveyType | null>;
    createSurvey(createSurveyInput: CreateSurveyInput): Promise<SurveyType>;
}
