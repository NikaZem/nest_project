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
    private reposirory: Repository<Review>
    ) { }

  create(createReviewDto: CreateReviewDto) {
    return 'This action adds a new review';
  }

  findAll() {
    return this.reposirory.find()
  }

  findOne(id: number) {
    return this.reposirory.findOneBy({ id })
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return this.reposirory.save({...updateReviewDto, id})
  }

  async remove(id: number) {
    await this.reposirory.delete(id)
  }
}
