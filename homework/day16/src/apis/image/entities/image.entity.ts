import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Image {
    @PrimaryGeneratedColumn('uuid')
    Image_id: string;

    @Column()
    Image_Address: string;
}
