import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
@Schema({
    timestamps: true
})
export class Article {
    @Prop() @ApiProperty() text: string;
    @Prop() @ApiProperty() author: string
}

// Document - Document is going to have a _id in document
export type ArticleDocument = Article & Document;

export const ArticleSchema = SchemaFactory.createForClass(Article); 