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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyType = void 0;
const graphql_1 = require("@nestjs/graphql");
const question_type_1 = require("./question.type");
const response_session_type_1 = require("./response-session.type");
let SurveyType = class SurveyType {
    id;
    url;
    title;
    createdAt;
    questions;
    responseSessions;
};
exports.SurveyType = SurveyType;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], SurveyType.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SurveyType.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], SurveyType.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], SurveyType.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => [question_type_1.QuestionType], { nullable: true }),
    __metadata("design:type", Array)
], SurveyType.prototype, "questions", void 0);
__decorate([
    (0, graphql_1.Field)(() => [response_session_type_1.ResponseSessionType], { nullable: true }),
    __metadata("design:type", Array)
], SurveyType.prototype, "responseSessions", void 0);
exports.SurveyType = SurveyType = __decorate([
    (0, graphql_1.ObjectType)('Survey')
], SurveyType);
//# sourceMappingURL=survey.type.js.map