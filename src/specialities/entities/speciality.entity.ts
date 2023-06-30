import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Speciality {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    faculty_id: number;

    @Column()
    number_of_grant: number;

    @Column()
    passing_score: number;

    @Column()
    first_subject: string;

    @Column()
    second_subject: string;

    @Column()
    third_subject: string;
}

