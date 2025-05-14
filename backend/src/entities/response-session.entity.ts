import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Survey } from './survey.entity';
import { Response } from './response.entity';

@ObjectType()
@Entity()
export class ResponseSession {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ID)
  @Column()
  surveyId: string;

  @Field()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Field(() => Survey)
  @ManyToOne(() => Survey, (survey) => survey.responseSessions)
  @JoinColumn({ name: 'surveyId' })
  survey: Survey;

  @Field(() => [Response], { nullable: true })
  @OneToMany(() => Response, (response) => response.responseSession)
  responses?: Response[];
}