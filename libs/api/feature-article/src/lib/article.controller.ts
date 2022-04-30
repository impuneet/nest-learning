import { ArticleService } from "@nest-app/api/data-access-article";
import { Controller, Get } from "@nestjs/common";

@Controller('articles')
export class ArticleController {
    constructor( private articleService: ArticleService ) {

    }

    @Get()
    async getAllArtciles() {
        return await this.articleService.getAll();
    }
}