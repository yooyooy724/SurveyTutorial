import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { CreateSurveyInput } from '../graphql/inputs/create-survey.input';

@Controller('survey')
export class SurveyController {
    constructor(readonly surveyService: SurveyService){}

    @Get()
    async getAllSurveys() {
        return this.surveyService.findAll();
    }

    @Get(':id')
    async getSurveyById(@Param('id') id: string) {
        return this.surveyService.findOneById(id);
    }

    @Post()
    async createSurvey(@Body() createSurveyInput: CreateSurveyInput) {
        return this.surveyService.create(createSurveyInput);
    }
}
