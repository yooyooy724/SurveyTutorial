import { ObjectType, Field, ID } from '@nestjs/graphql';
import { QuestionType } from './question.type';
import { ResponseSessionType } from './response-session.type';

@ObjectType('Survey')
export class SurveyType {
  @Field(() => ID)
  id: string;

  @Field()
  url: string;

  @Field({ nullable: true })
  title?: string;

  @Field()
  createdAt: Date;

  @Field(() => [QuestionType], { nullable: true })
  questions?: QuestionType[];

  @Field(() => [ResponseSessionType], { nullable: true })
  responseSessions?: ResponseSessionType[];
}
