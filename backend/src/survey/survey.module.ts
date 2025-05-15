import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';
import { SurveyResolver } from './survey.resolver';
import { Survey } from '../entities/survey.entity';
import { Question } from '../entities/question.entity';
import { Choice } from '../entities/choice.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Survey, Question, Choice]) // TypeormのRepoを使うのに必要
  ],
  controllers: [SurveyController],
  providers: [SurveyService, SurveyResolver],
  exports: [SurveyService]
})
export class SurveyModule {}
