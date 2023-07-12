import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Review } from 'src/reviews/entities/review.entity';

export enum genderEnum {
    MALE = 'male',
    FEMALE = 'female'
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    first_name: string;

    @Column()
    last_Name: string;

   /*  @Column({
        type: 'datetime'
    })
    birthday: Date;

    @Column()
    county: string;

    @Column()
    city: string;

    @Column({
        type: 'enum',
        enum: genderEnum

    })
    gender: genderEnum; */

    @OneToMany(type => Review, review => review.user_id)
    reviews: Review[]
}


