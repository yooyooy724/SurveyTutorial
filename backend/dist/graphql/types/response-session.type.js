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
exports.ResponseSessionType = void 0;
const graphql_1 = require("@nestjs/graphql");
const survey_type_1 = require("./survey.type");
const response_type_1 = require("./response.type");
let ResponseSessionType = class ResponseSessionType {
    id;
    surveyId;
    createdAt;
    survey;
    responses;
};
exports.ResponseSessionType = ResponseSessionType;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], ResponseSessionType.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseSessionType.prototype, "surveyId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ResponseSessionType.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => survey_type_1.SurveyType, { nullable: true }),
    __metadata("design:type", survey_type_1.SurveyType)
], ResponseSessionType.prototype, "survey", void 0);
__decorate([
    (0, graphql_1.Field)(() => [response_type_1.ResponseType], { nullable: true }),
    __metadata("design:type", Array)
], ResponseSessionType.prototype, "responses", void 0);
exports.ResponseSessionType = ResponseSessionType = __decorate([
    (0, graphql_1.ObjectType)('ResponseSession')
], ResponseSessionType);
//# sourceMappingURL=response-session.type.js.map