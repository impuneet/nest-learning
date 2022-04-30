import { ApiProperty } from "@nestjs/swagger";

export class CreateArticleDto {
    @ApiProperty({
        example: 'My First Article'
    }) text: string;
    @ApiProperty({
        example: 'Puneet Sharma'
    }) author: string;
}