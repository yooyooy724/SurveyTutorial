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
exports.Response = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const question_entity_1 = require("./question.entity");
const choice_entity_1 = require("./choice.entity");
const response_session_entity_1 = require("./response-session.entity");
let Response = class Response {
    id;
    responseSessionId;
    questionId;
    choiceId;
    responseSession;
    question;
    choice;
};
exports.Response = Response;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Response.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Response.prototype, "responseSessionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Response.prototype, "questionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Response.prototype, "choiceId", void 0);
__decorate([
    (0, graphql_1.Field)(() => response_session_entity_1.ResponseSession, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => response_session_entity_1.ResponseSession, (session) => session.responses),
    (0, typeorm_1.JoinColumn)({ name: 'responseSessionId' }),
    __metadata("design:type", response_session_entity_1.ResponseSession)
], Response.prototype, "responseSession", void 0);
__decorate([
    (0, graphql_1.Field)(() => question_entity_1.Question),
    (0, typeorm_1.ManyToOne)(() => question_entity_1.Question, (question) => question.responses),
    (0, typeorm_1.JoinColumn)({ name: 'questionId' }),
    __metadata("design:type", question_entity_1.Question)
], Response.prototype, "question", void 0);
__decorate([
    (0, graphql_1.Field)(() => choice_entity_1.Choice),
    (0, typeorm_1.ManyToOne)(() => choice_entity_1.Choice, (choice) => choice.responses),
    (0, typeorm_1.JoinColumn)({ name: 'choiceId' }),
    __metadata("design:type", choice_entity_1.Choice)
], Response.prototype, "choice", void 0);
exports.Response = Response = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Response);
//# sourceMappingURL=response.entity.js.map