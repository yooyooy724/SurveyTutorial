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
exports.Choice = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const question_entity_1 = require("./question.entity");
const response_entity_1 = require("./response.entity");
let Choice = class Choice {
    id;
    label;
    sortOrder;
    questionId;
    question;
    responses;
};
exports.Choice = Choice;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Choice.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Choice.prototype, "label", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Choice.prototype, "sortOrder", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Choice.prototype, "questionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => question_entity_1.Question),
    (0, typeorm_1.ManyToOne)(() => question_entity_1.Question, (question) => question.choices),
    (0, typeorm_1.JoinColumn)({ name: 'questionId' }),
    __metadata("design:type", question_entity_1.Question)
], Choice.prototype, "question", void 0);
__decorate([
    (0, graphql_1.Field)(() => [response_entity_1.Response], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => response_entity_1.Response, (response) => response.choice),
    __metadata("design:type", Array)
], Choice.prototype, "responses", void 0);
exports.Choice = Choice = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Choice);
//# sourceMappingURL=choice.entity.js.map