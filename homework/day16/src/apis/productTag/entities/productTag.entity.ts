import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductTag {
    @PrimaryGeneratedColumn('uuid')
    productTag_id: string;

    @Column()
    productTag_name: string;
}
