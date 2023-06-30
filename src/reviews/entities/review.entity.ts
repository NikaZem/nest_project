import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';


@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    body: string;

    @Column()
    user_id: number;

    @Column()
    speciality_id: number;

    @ManyToOne(type => User, user => user.reviews, {eager: true})
    user: User
}


