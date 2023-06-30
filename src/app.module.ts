import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UsersModule } from './users/users.module';
import { ReviewsModule } from './reviews/reviews.module';
import { User } from './users/entities/user.entity';
import { Review } from './reviews/entities/review.entity';
import { ConfigModule } from '@nestjs/config';
import { SpecialitiesModule } from './specialities/specialities.module';
import { Speciality } from './specialities/entities/speciality.entity';


@Module({
  imports: [
     UsersModule,
     ReviewsModule,
     ConfigModule.forRoot(),
     TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DBNAME,
      entities: [ User, Review, Speciality ],
      synchronize: true,
    }),
     UsersModule,
     ReviewsModule,
     SpecialitiesModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
