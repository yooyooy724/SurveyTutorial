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
exports.Survey = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const question_entity_1 = require("./question.entity");
const response_session_entity_1 = require("./response-session.entity");
let Survey = class Survey {
    id;
    url;
    title;
    createdAt;
    questions;
    responseSessions;
};
exports.Survey = Survey;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Survey.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Survey.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Survey.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Survey.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => [question_entity_1.Question], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => question_entity_1.Question, (question) => question.survey),
    __metadata("design:type", Array)
], Survey.prototype, "questions", void 0);
__decorate([
    (0, graphql_1.Field)(() => [response_session_entity_1.ResponseSession], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => response_session_entity_1.ResponseSession, (session) => session.survey),
    __metadata("design:type", Array)
], Survey.prototype, "responseSessions", void 0);
exports.Survey = Survey = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Survey);
//# sourceMappingURL=survey.entity.js.map