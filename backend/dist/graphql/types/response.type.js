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
exports.ResponseType = void 0;
const graphql_1 = require("@nestjs/graphql");
const question_type_1 = require("./question.type");
const choice_type_1 = require("./choice.type");
const response_session_type_1 = require("./response-session.type");
let ResponseType = class ResponseType {
    id;
    responseSessionId;
    questionId;
    choiceId;
    responseSession;
    question;
    choice;
};
exports.ResponseType = ResponseType;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], ResponseType.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseType.prototype, "responseSessionId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseType.prototype, "questionId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseType.prototype, "choiceId", void 0);
__decorate([
    (0, graphql_1.Field)(() => response_session_type_1.ResponseSessionType, { nullable: true }),
    __metadata("design:type", response_session_type_1.ResponseSessionType)
], ResponseType.prototype, "responseSession", void 0);
__decorate([
    (0, graphql_1.Field)(() => question_type_1.QuestionType, { nullable: true }),
    __metadata("design:type", question_type_1.QuestionType)
], ResponseType.prototype, "question", void 0);
__decorate([
    (0, graphql_1.Field)(() => choice_type_1.ChoiceType, { nullable: true }),
    __metadata("design:type", choice_type_1.ChoiceType)
], ResponseType.prototype, "choice", void 0);
exports.ResponseType = ResponseType = __decorate([
    (0, graphql_1.ObjectType)('Response')
], ResponseType);
//# sourceMappingURL=response.type.js.map