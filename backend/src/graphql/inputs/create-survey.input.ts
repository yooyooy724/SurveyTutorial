import { InputType, Field } from '@nestjs/graphql';
import { CreateQuestionInput } from './create-question.input';

@InputType()
export class CreateSurveyInput {
  @Field({ nullable: true })
  title?: string;

  @Field(() => [CreateQuestionInput])
  questions: CreateQuestionInput[];
}