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
exports.ResponseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const response_entity_1 = require("../entities/response.entity");
const response_session_entity_1 = require("../entities/response-session.entity");
let ResponseService = class ResponseService {
    responseRepository;
    responseSessionRepository;
    constructor(responseRepository, responseSessionRepository) {
        this.responseRepository = responseRepository;
        this.responseSessionRepository = responseSessionRepository;
    }
    async createResponse(createResponseInput) {
        const responseSession = this.responseSessionRepository.create({
            surveyId: createResponseInput.surveyId,
        });
        const savedResponseSession = await this.responseSessionRepository.save(responseSession);
        const response = this.responseRepository.create({
            responseSessionId: savedResponseSession.id,
            questionId: createResponseInput.questionId,
            choiceId: createResponseInput.choiceId,
        });
        return this.responseRepository.save(response);
    }
    async getResponsesForSurvey(surveyId) {
        return this.responseRepository
            .createQueryBuilder('response')
            .innerJoinAndSelect('response.responseSession', 'responseSession')
            .innerJoinAndSelect('response.question', 'question')
            .innerJoinAndSelect('response.choice', 'choice')
            .where('responseSession.surveyId = :surveyId', { surveyId })
            .getMany();
    }
    async getResponseCountsByChoice(questionId) {
        const results = await this.responseRepository
            .createQueryBuilder('response')
            .select('choice.id', 'choiceId')
            .addSelect('choice.label', 'choiceLabel')
            .addSelect('COUNT(response.id)', 'count')
            .innerJoin('response.choice', 'choice')
            .where('response.questionId = :questionId', { questionId })
            .groupBy('choice.id, choice.label')
            .orderBy('choice.sortOrder', 'ASC')
            .getRawMany();
        const totalResponses = results.reduce((sum, result) => sum + parseInt(result.count), 0);
        return results.map(result => ({
            ...result,
            percentage: totalResponses ? (parseInt(result.count) / totalResponses) * 100 : 0,
        }));
    }
};
exports.ResponseService = ResponseService;
exports.ResponseService = ResponseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(response_entity_1.Response)),
    __param(1, (0, typeorm_1.InjectRepository)(response_session_entity_1.ResponseSession)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ResponseService);
//# sourceMappingURL=response.service.js.map