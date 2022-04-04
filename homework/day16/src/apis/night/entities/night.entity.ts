import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Night {
    @PrimaryGeneratedColumn('uuid')
    night_id: string;

    @Column()
    night_name: string;
}
