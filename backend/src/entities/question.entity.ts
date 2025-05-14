import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Survey } from './survey.entity';
import { Choice } from './choice.entity';
import { Response } from './response.entity';

@ObjectType()
@Entity()
export class Question {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  text: string;

  @Field(() => Survey)
  @ManyToOne(() => Survey, (survey) => survey.questions)
  survey: Survey;

  @Field(() => [Choice], { nullable: true })
  @OneToMany(() => Choice, (choice) => choice.question)
  choices?: Choice[];

  @Field(() => [Response], { nullable: true })
  @OneToMany(() => Response, (response) => response.question)
  responses?: Response[];
}
