import { CreateArticleDto } from "@nest-app/api/data-access-dtos";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose'
import { Article, ArticleDocument } from "./article.model";

@Injectable()
export class ArticleService {
    constructor(@InjectModel(Article.name) private articleModel: Model<ArticleDocument>) {
    }
 
    async getAll() {
        return await this.articleModel.find().exec();
    }


    async createArticle(dto: CreateArticleDto) {
        // article model is mongoose model... 
        const article = new this.articleModel(dto); // create article id but don't have it in database yet
        // mongoose validation will happening
        return await this.articleModel.create(article); //putting into database
    }
}