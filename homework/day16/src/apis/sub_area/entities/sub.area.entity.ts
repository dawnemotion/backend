import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SubArea {
    @PrimaryGeneratedColumn('uuid')
    sub_area_id: string;

    @Column()
    sub_area_name: string;
}
