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
exports.Question = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const survey_entity_1 = require("./survey.entity");
const choice_entity_1 = require("./choice.entity");
const response_entity_1 = require("./response.entity");
let Question = class Question {
    id;
    sentence;
    sortOrder;
    surveyId;
    survey;
    choices;
    responses;
};
exports.Question = Question;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Question.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Question.prototype, "sentence", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Question.prototype, "sortOrder", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Question.prototype, "surveyId", void 0);
__decorate([
    (0, graphql_1.Field)(() => survey_entity_1.Survey),
    (0, typeorm_1.ManyToOne)(() => survey_entity_1.Survey, (survey) => survey.questions),
    (0, typeorm_1.JoinColumn)({ name: 'surveyId' }),
    __metadata("design:type", survey_entity_1.Survey)
], Question.prototype, "survey", void 0);
__decorate([
    (0, graphql_1.Field)(() => [choice_entity_1.Choice], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => choice_entity_1.Choice, (choice) => choice.question),
    __metadata("design:type", Array)
], Question.prototype, "choices", void 0);
__decorate([
    (0, graphql_1.Field)(() => [response_entity_1.Response], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => response_entity_1.Response, (response) => response.question),
    __metadata("design:type", Array)
], Question.prototype, "responses", void 0);
exports.Question = Question = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Question);
//# sourceMappingURL=question.entity.js.map