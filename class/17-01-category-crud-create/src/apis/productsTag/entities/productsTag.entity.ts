import { Field, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/apis/products/entities/product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

// 테이블이라고 알려줘야한다.
// @데코레이터를 선언하고 Entity() 테이블이라고 한다.
@Entity()
@ObjectType()
export class ProductTag {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    name: string;

    // 다대다 관계
    // 다대다관계에서 어떻게 찾을것인지 조건을 걸어야한다.
    @ManyToMany(() => Product, (product) => product.productTags)
    @Field(() => [Product])
    products: Product[];
}
