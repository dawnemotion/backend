import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MainArea {
    @PrimaryGeneratedColumn('uuid')
    main_area_id: string;

    @Column()
    main_area_name: string;
}
