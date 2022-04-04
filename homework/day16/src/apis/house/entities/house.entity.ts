import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Room {
    @PrimaryGeneratedColumn('uuid')
    house_id: string;

    @Column()
    house_name: string;
}
