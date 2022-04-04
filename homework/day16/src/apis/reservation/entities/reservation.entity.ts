import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lodgment {
    @PrimaryGeneratedColumn('uuid')
    lodgment_id: string;

    @Column()
    lodgment_name: string;

    @Column()
    lodgment_callnumber: string;

    @Column()
    lodgment_intro: string;
}
