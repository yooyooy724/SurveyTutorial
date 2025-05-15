import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { SurveyType } from '../graphql/types/survey.type';
import { SurveyService } from './survey.service';
import { CreateSurveyInput } from '../graphql/inputs/create-survey.input';

@Resolver(() => SurveyType)
export class SurveyResolver {
  constructor(private surveyService: SurveyService) {}

  @Query(() => [SurveyType])
  async surveys(): Promise<SurveyType[]> {
    return this.surveyService.findAll();
  }

  @Query(() => SurveyType, { nullable: true })
  async survey(@Args('id', { type: () => ID }) id: string): Promise<SurveyType | null> {
    return this.surveyService.findOneById(id);
  }

  @Mutation(() => SurveyType)
  async createSurvey(
    @Args('createSurveyInput') createSurveyInput: CreateSurveyInput,
  ): Promise<SurveyType> {
    return this.surveyService.create(createSurveyInput);
  }
}
