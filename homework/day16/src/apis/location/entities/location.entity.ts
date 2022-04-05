import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Location {
    @PrimaryGeneratedColumn('uuid')
    location_id: string;

    @Column()
    location_Address: string;
}
