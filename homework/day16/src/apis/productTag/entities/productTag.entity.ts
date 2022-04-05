import { Product } from 'src/apis/product/entities/product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductTag {
    @PrimaryGeneratedColumn('uuid')
    productTag_id: string;

    @Column()
    productTag_name: string;

    // 다대다 관계
    @ManyToMany(() => Product, (products) => products.productTags)
    products: Product[];
}
