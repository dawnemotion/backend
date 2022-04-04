import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    product_id: string;

    @Column()
    product_name: string;

    @Column()
    price: number;

    @Column()
    used_hour: number;

    @Column()
    used_people: number;
}
