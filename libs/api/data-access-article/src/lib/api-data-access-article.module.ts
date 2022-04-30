import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleService } from './article.service';
import { Article, ArticleSchema } from './article.model';

@Module({
  providers: [ ArticleService ],
  imports: [
    MongooseModule.forFeature([{
    name: Article.name,
    schema: ArticleSchema
  }])
],
  exports: [ArticleService],
})
export class ApiDataAccessArticleModule {}
