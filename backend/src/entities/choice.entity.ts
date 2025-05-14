import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Question } from './question.entity';
import { Response } from './response.entity';

@ObjectType()
@Entity()
export class Choice {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  label: string;

  @Field(() => Int)
  @Column()
  sortOrder: number;

  @Field(() => ID)
  @Column()
  questionId: string;

  @Field(() => Question)
  @ManyToOne(() => Question, (question) => question.choices)
  @JoinColumn({ name: 'questionId' })
  question: Question;

  @Field(() => [Response], { nullable: true })
  @OneToMany(() => Response, (response) => response.choice)
  responses?: Response[];
}