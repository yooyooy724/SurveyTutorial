import { Resolver, Query, Mutation, Args, ID, ObjectType, Field } from '@nestjs/graphql';
import { ResponseType } from '../graphql/types/response.type';
import { ResponseService } from '../services/response.service';
import { CreateResponseInput } from '../graphql/inputs/create-response.input';

@ObjectType()
class ResponseCount {
  @Field()
  choiceId: string;

  @Field()
  choiceLabel: string;

  @Field()
  count: number;

  @Field()
  percentage: number;
}

@Resolver(() => ResponseType)
export class ResponseResolver {
  constructor(private responseService: ResponseService) {}

  @Mutation(() => ResponseType)
  async createResponse(
    @Args('createResponseInput') createResponseInput: CreateResponseInput,
  ): Promise<ResponseType> {
    return this.responseService.createResponse(createResponseInput);
  }

  @Query(() => [ResponseType])
  async surveyResponses(@Args('surveyId', { type: () => ID }) surveyId: string): Promise<ResponseType[]> {
    return this.responseService.getResponsesForSurvey(surveyId);
  }

  @Query(() => [ResponseCount])
  async responseCountsByQuestion(
    @Args('questionId', { type: () => ID }) questionId: string,
  ): Promise<ResponseCount[]> {
    return this.responseService.getResponseCountsByChoice(questionId);
  }
}