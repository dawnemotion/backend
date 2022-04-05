import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class House {
    @PrimaryGeneratedColumn('uuid')
    house_id: string;

    @Column()
    house_name: string;
}
