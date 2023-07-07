import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
    @ApiProperty({
        description: 'Название отзыва'
    })
    title: string

    @ApiProperty({
        description: 'Описание отзыва'
    })
    description: string

    @ApiProperty({
        description: 'ID пользователя',
        minimum: 1
    })
    user_id: number
}
