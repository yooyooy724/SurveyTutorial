import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Question } from './question.entity';
import { ResponseSession } from './response-session.entity';

@ObjectType()
@Entity()
export class Survey {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ unique: true })
  url: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  title?: string;

  @Field()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Field(() => [Question], { nullable: true })
  @OneToMany(() => Question, (question) => question.survey)
  questions?: Question[];

  @Field(() => [ResponseSession], { nullable: true })
  @OneToMany(() => ResponseSession, (session) => session.survey)
  responseSessions?: ResponseSession[];
}