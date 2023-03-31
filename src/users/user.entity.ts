/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    // eslint-disable-next-line prettier/prettier
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;
}
