import { Field, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/apis/product/entities/product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class ProductTag {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    productTag_id: string;

    @Column()
    @Field(() => String)
    productTag_name: string;

    // 다대다 관계
    @ManyToMany(() => Product, (products) => products.productTags)
    @Field(() => [Product])
    products: Product[];
}
