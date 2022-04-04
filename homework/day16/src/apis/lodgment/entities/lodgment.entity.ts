import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    user_id: string;

    @Column()
    user_name: string;

    @Column()
    user_phone: number;

    @Column()
    user_age: number;
}
