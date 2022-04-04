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
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    isSoldout: boolean;

    @JoinColumn()
    // 연관된 행끼리 연결하는 데코레이터
    @OneToOne(() => ProductSaleslocation)
    // 1:1관계라는 것을 mysql에 알려야한다.
    productsSaleslocation: ProductSaleslocation;

    // 1:1일 경우에만 JoinColumn을 이용
    @ManyToOne(() => ProductCategory)
    productCategory: ProductCategory;

    @ManyToOne(() => User)
    user: User;

    // 다대다 관계
    @JoinTable()
    // 조인테이블은 둘중에 한 군데만 해주면된다.
    @ManyToMany(() => ProductTag, (productTags) => productTags.products)
    productTags: ProductTag[];
}
