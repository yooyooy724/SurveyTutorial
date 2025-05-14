import { ObjectType, Field, ID } from '@nestjs/graphql';
import { QuestionType } from './question.type';
import { ResponseType } from './response.type';

@ObjectType('Choice')
export class ChoiceType {
  @Field(() => ID)
  id: string;

  @Field()
  label: string;

  @Field()
  sortOrder: number;

  @Field()
  questionId: string;

  @Field(() => QuestionType, { nullable: true })
  question?: QuestionType;

  @Field(() => [ResponseType], { nullable: true })
  responses?: ResponseType[];
}