import { ObjectType, Field, ID } from '@nestjs/graphql';
import { SurveyType } from './survey.type';
import { ChoiceType } from './choice.type';
import { ResponseType } from './response.type';

@ObjectType('Question')
export class QuestionType {
  @Field(() => ID)
  id: string;

  @Field()
  sentence: string;

  @Field()
  sortOrder: number;

  @Field()
  surveyId: string;

  @Field(() => SurveyType, { nullable: true })
  survey?: SurveyType;

  @Field(() => [ChoiceType], { nullable: true })
  choices?: ChoiceType[];

  @Field(() => [ResponseType], { nullable: true })
  responses?: ResponseType[];
}