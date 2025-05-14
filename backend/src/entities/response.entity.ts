import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Question } from './question.entity';
import { Choice } from './choice.entity';
import { ResponseSession } from './response-session.entity';

@ObjectType()
@Entity()
export class Response {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ID)
  @Column()
  responseSessionId: string;

  @Field(() => ID)
  @Column()
  questionId: string;

  @Field(() => ID)
  @Column()
  choiceId: string;

  @Field(() => ResponseSession)
  @ManyToOne(() => ResponseSession, (session) => session.responses)
  @JoinColumn({ name: 'responseSessionId' })
  responseSession: ResponseSession;

  @Field(() => Question)
  @ManyToOne(() => Question, (question) => question.responses)
  @JoinColumn({ name: 'questionId' })
  question: Question;

  @Field(() => Choice)
  @ManyToOne(() => Choice, (choice) => choice.responses)
  @JoinColumn({ name: 'choiceId' })
  choice: Choice;
}