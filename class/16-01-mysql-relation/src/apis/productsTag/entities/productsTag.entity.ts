import { Product } from 'src/apis/products/entities/product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

// 테이블이라고 알려줘야한다.
// @데코레이터를 선언하고 Entity() 테이블이라고 한다.
@Entity()
export class ProductTag {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    // 다대다 관계
    // 다대다관계에서 어떻게 찾을것인지 조건을 걸어야한다.
    @ManyToMany(() => Product, (product) => product.productTags)
    products: Product[];
}
