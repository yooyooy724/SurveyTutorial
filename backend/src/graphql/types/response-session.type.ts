import { ObjectType, Field, ID } from '@nestjs/graphql';
import { SurveyType } from './survey.type';
import { ResponseType } from './response.type';

@ObjectType('ResponseSession')
export class ResponseSessionType {
  @Field(() => ID)
  id: string;

  @Field()
  surveyId: string;

  @Field()
  createdAt: Date;

  @Field(() => SurveyType, { nullable: true })
  survey?: SurveyType;

  @Field(() => [ResponseType], { nullable: true })
  responses?: ResponseType[];
}
