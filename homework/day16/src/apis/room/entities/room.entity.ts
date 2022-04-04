import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Room {
    @PrimaryGeneratedColumn('uuid')
    room_id: string;

    @Column()
    room_name: string;
}
