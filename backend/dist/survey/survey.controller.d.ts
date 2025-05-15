import { SurveyService } from './survey.service';
import { CreateSurveyInput } from '../graphql/inputs/create-survey.input';
export declare class SurveyController {
    readonly surveyService: SurveyService;
    constructor(surveyService: SurveyService);
    getAllSurveys(): Promise<import("../entities/survey.entity").Survey[]>;
    getSurveyById(id: string): Promise<import("../entities/survey.entity").Survey>;
    createSurvey(createSurveyInput: CreateSurveyInput): Promise<import("../entities/survey.entity").Survey>;
}
