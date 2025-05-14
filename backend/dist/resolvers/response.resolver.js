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
exports.ResponseResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const response_type_1 = require("../graphql/types/response.type");
const response_service_1 = require("../services/response.service");
const create_response_input_1 = require("../graphql/inputs/create-response.input");
let ResponseCount = class ResponseCount {
    choiceId;
    choiceLabel;
    count;
    percentage;
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseCount.prototype, "choiceId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseCount.prototype, "choiceLabel", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], ResponseCount.prototype, "count", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], ResponseCount.prototype, "percentage", void 0);
ResponseCount = __decorate([
    (0, graphql_1.ObjectType)()
], ResponseCount);
let ResponseResolver = class ResponseResolver {
    responseService;
    constructor(responseService) {
        this.responseService = responseService;
    }
    async createResponse(createResponseInput) {
        return this.responseService.createResponse(createResponseInput);
    }
    async surveyResponses(surveyId) {
        return this.responseService.getResponsesForSurvey(surveyId);
    }
    async responseCountsByQuestion(questionId) {
        return this.responseService.getResponseCountsByChoice(questionId);
    }
};
exports.ResponseResolver = ResponseResolver;
__decorate([
    (0, graphql_1.Mutation)(() => response_type_1.ResponseType),
    __param(0, (0, graphql_1.Args)('createResponseInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_response_input_1.CreateResponseInput]),
    __metadata("design:returntype", Promise)
], ResponseResolver.prototype, "createResponse", null);
__decorate([
    (0, graphql_1.Query)(() => [response_type_1.ResponseType]),
    __param(0, (0, graphql_1.Args)('surveyId', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResponseResolver.prototype, "surveyResponses", null);
__decorate([
    (0, graphql_1.Query)(() => [ResponseCount]),
    __param(0, (0, graphql_1.Args)('questionId', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResponseResolver.prototype, "responseCountsByQuestion", null);
exports.ResponseResolver = ResponseResolver = __decorate([
    (0, graphql_1.Resolver)(() => response_type_1.ResponseType),
    __metadata("design:paramtypes", [response_service_1.ResponseService])
], ResponseResolver);
//# sourceMappingURL=response.resolver.js.map