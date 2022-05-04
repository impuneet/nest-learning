import { ArticleService } from "@nest-app/api/data-access-article";
import { CreateArticleDto } from "@nest-app/api/data-access-dtos";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Article } from "@nest-app/api/data-access-article";

@Controller('articles')
@ApiTags('articles')
export class ArticleController {
    constructor( private articleService: ArticleService ) {
    }

    @Get()
    @ApiOkResponse({
        type: Article,
        isArray: true
    })
    async getAllArtciles() {
        return await this.articleService.getAll();
    }

    @Post()
    @ApiCreatedResponse({
        type: Article
    })
    async createArtcile(@Body() article: CreateArticleDto) {
        return await this.articleService.createArticle(article);
    }
}