import { InputType, Field } from '@nestjs/graphql';
import { CreateChoiceInput } from './create-choice.input';

@InputType()
export class CreateQuestionInput {
  @Field()
  sentence: string;

  @Field()
  sortOrder: number;

  @Field(() => [CreateChoiceInput])
  choices: CreateChoiceInput[];
}