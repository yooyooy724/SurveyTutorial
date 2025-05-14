import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateResponseInput {
  @Field()
  surveyId: string;

  @Field()
  questionId: string;

  @Field()
  choiceId: string;
}