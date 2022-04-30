import { ApiDataAccessArticleModule } from '@nest-app/api/data-access-article';
import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';

@Module({
  controllers: [
    ArticleController
  ],
  imports: [
    ApiDataAccessArticleModule
  ],
  providers: [],
  exports: [],
})
export class ApiFeatureArticleModule {}
