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
exports.SurveyResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const survey_type_1 = require("../graphql/types/survey.type");
const survey_service_1 = require("./survey.service");
const create_survey_input_1 = require("../graphql/inputs/create-survey.input");
let SurveyResolver = class SurveyResolver {
    surveyService;
    constructor(surveyService) {
        this.surveyService = surveyService;
    }
    async surveys() {
        return this.surveyService.findAll();
    }
    async survey(id) {
        return this.surveyService.findOneById(id);
    }
    async createSurvey(createSurveyInput) {
        return this.surveyService.create(createSurveyInput);
    }
};
exports.SurveyResolver = SurveyResolver;
__decorate([
    (0, graphql_1.Query)(() => [survey_type_1.SurveyType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SurveyResolver.prototype, "surveys", null);
__decorate([
    (0, graphql_1.Query)(() => survey_type_1.SurveyType, { nullable: true }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SurveyResolver.prototype, "survey", null);
__decorate([
    (0, graphql_1.Mutation)(() => survey_type_1.SurveyType),
    __param(0, (0, graphql_1.Args)('createSurveyInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_survey_input_1.CreateSurveyInput]),
    __metadata("design:returntype", Promise)
], SurveyResolver.prototype, "createSurvey", null);
exports.SurveyResolver = SurveyResolver = __decorate([
    (0, graphql_1.Resolver)(() => survey_type_1.SurveyType),
    __metadata("design:paramtypes", [survey_service_1.SurveyService])
], SurveyResolver);
//# sourceMappingURL=survey.resolver.js.map