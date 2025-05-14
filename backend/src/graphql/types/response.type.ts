import { ObjectType, Field, ID } from '@nestjs/graphql';
import { QuestionType } from './question.type';
import { ChoiceType } from './choice.type';
import { ResponseSessionType } from './response-session.type';

@ObjectType('Response')
export class ResponseType {
  @Field(() => ID)
  id: string;

  @Field()
  responseSessionId: string;

  @Field()
  questionId: string;

  @Field()
  choiceId: string;

  @Field(() => ResponseSessionType, { nullable: true })
  responseSession?: ResponseSessionType;

  @Field(() => QuestionType, { nullable: true })
  question?: QuestionType;

  @Field(() => ChoiceType, { nullable: true })
  choice?: ChoiceType;
}
