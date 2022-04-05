import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductCategory } from 'src/apis/productsCategory/entities/productCategory.entity';
import { ProductSaleslocation } from 'src/apis/productsSaleslocation/entities/productsSaleslocation.entity';
import { ProductTag } from 'src/apis/productsTag/entities/productsTag.entity';
import { User } from 'src/apis/users/entities/users.entity';
import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

// 테이블이라고 알려줘야한다.
// @데코레이터를 선언하고 Entity() 테이블이라고 한다.

@Entity()
@ObjectType()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    name: string;

    @Column()
    @Field(() => String)
    description: string;

    @Column()
    @Field(() => Int)
    price: number;

    // sql에 들어가는 column에 dafult를 주어 기본값으로 false를 준다.
    @Column({ default: false })
    @Field(() => Boolean)
    isSoldout: boolean;

    @JoinColumn()
    // 연관된 행끼리 연결하는 데코레이터
    @OneToOne(() => ProductSaleslocation)
    // 1:1관계라는 것을 mysql에 알려야한다.
    @Field(() => ProductSaleslocation)
    productsSaleslocation: ProductSaleslocation;

    // 1:1일 경우에만 JoinColumn을 이용
    @ManyToOne(() => ProductCategory)
    @Field(() => ProductCategory)
    productCategory: ProductCategory;

    @ManyToOne(() => User)
    @Field(() => User)
    user: User;

    // 다대다 관계
    @JoinTable()
    // 조인테이블은 둘중에 한 군데만 해주면된다.
    @ManyToMany(() => ProductTag, (productTags) => productTags.products)
    // 다대다는 배열 형태로 만들어줘야한다.
    @Field(() => [ProductTag])
    productTags: ProductTag[];
}
