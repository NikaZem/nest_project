import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';


@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private repository: Repository<Review>
    ) { }

  create(createReviewDto: CreateReviewDto) {
    return 'This action adds a new review';
  }

  findAll() {
    return this.repository.find()
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id })
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return this.repository.save({...updateReviewDto, id})
  }

  async remove(id: number) {
    await this.repository.delete(id)
  }
}
