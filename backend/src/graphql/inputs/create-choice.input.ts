import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateChoiceInput {
  @Field()
  label: string;

  @Field()
  sortOrder: number;
}