"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const uuid_1 = require("uuid");
const survey_entity_1 = require("../entities/survey.entity");
const question_entity_1 = require("../entities/question.entity");
const choice_entity_1 = require("../entities/choice.entity");
let SurveyService = class SurveyService {
    surveyRepository;
    questionRepository;
    choiceRepository;
    constructor(surveyRepository, questionRepository, choiceRepository) {
        this.surveyRepository = surveyRepository;
        this.questionRepository = questionRepository;
        this.choiceRepository = choiceRepository;
    }
    async findAll() {
        return this.surveyRepository.find({
            relations: ['questions', 'questions.choices'],
        });
    }
    async findOneById(id) {
        return this.surveyRepository.findOne({
            where: { id },
            relations: ['questions', 'questions.choices'],
        });
    }
    async findOneByUrl(url) {
        return this.surveyRepository.findOne({
            where: { url },
            relations: ['questions', 'questions.choices'],
        });
    }
    async create(createSurveyInput) {
        const url = this.generateUniqueUrl();
        const survey = this.surveyRepository.create({
            url,
            title: createSurveyInput.title,
        });
        const savedSurvey = await this.surveyRepository.save(survey);
        for (const questionInput of createSurveyInput.questions) {
            const question = this.questionRepository.create({
                surveyId: savedSurvey.id,
                sentence: questionInput.sentence,
                sortOrder: questionInput.sortOrder,
            });
            const savedQuestion = await this.questionRepository.save(question);
            for (const choiceInput of questionInput.choices) {
                const choice = this.choiceRepository.create({
                    questionId: savedQuestion.id,
                    label: choiceInput.label,
                    sortOrder: choiceInput.sortOrder,
                });
                await this.choiceRepository.save(choice);
            }
        }
        const foundSurvey = await this.findOneById(savedSurvey.id);
        if (!foundSurvey) {
            throw new Error('Failed to find created survey');
        }
        return foundSurvey;
    }
    generateUniqueUrl() {
        return (0, uuid_1.v4)().substring(0, 8);
    }
};
exports.SurveyService = SurveyService;
exports.SurveyService = SurveyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(survey_entity_1.Survey)),
    __param(1, (0, typeorm_1.InjectRepository)(question_entity_1.Question)),
    __param(2, (0, typeorm_1.InjectRepository)(choice_entity_1.Choice)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], SurveyService);
//# sourceMappingURL=survey.service.js.map