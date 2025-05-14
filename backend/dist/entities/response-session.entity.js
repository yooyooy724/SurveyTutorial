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
exports.ResponseSession = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const survey_entity_1 = require("./survey.entity");
const response_entity_1 = require("./response.entity");
let ResponseSession = class ResponseSession {
    id;
    surveyId;
    createdAt;
    survey;
    responses;
};
exports.ResponseSession = ResponseSession;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ResponseSession.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResponseSession.prototype, "surveyId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ResponseSession.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => survey_entity_1.Survey, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => survey_entity_1.Survey, (survey) => survey.responseSessions),
    (0, typeorm_1.JoinColumn)({ name: 'surveyId' }),
    __metadata("design:type", survey_entity_1.Survey)
], ResponseSession.prototype, "survey", void 0);
__decorate([
    (0, graphql_1.Field)(() => [response_entity_1.Response], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => response_entity_1.Response, (response) => response.responseSession),
    __metadata("design:type", Array)
], ResponseSession.prototype, "responses", void 0);
exports.ResponseSession = ResponseSession = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], ResponseSession);
//# sourceMappingURL=response-session.entity.js.map