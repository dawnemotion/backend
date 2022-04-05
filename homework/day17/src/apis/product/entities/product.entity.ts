import { Field, Int, ObjectType } from '@nestjs/graphql';
import { House } from 'src/apis/house/entities/house.entity';
import { Lodgment } from 'src/apis/lodgment/entities/lodgment.entity';
import { Night } from 'src/apis/night/entities/night.entity';
import { ProductTag } from 'src/apis/productTag/entities/productTag.entity';
import { Room } from 'src/apis/room/entities/room.entity';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

// entity에 graphql에서 인식할 수 있게 형식을 맞춰줘야한다.
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

    // int값으로 설정할 시 nullable도 같이 설정해줘야한다.
    @Column({ nullable: true })
    @Field(() => Int)
    price: number;

    @Column({ nullable: true })
    @Field(() => Int)
    usedhour: number;

    @Column({ nullable: true })
    @Field(() => Int)
    usedpeople: number;

    // 기본으로 존재해야할 값들은 default를 이용한다.
    // 널값도 같이 허용해준다.
    // boolean값에 디폴트값으로 false를 주었는데
    // 진행이 안되어서 nullable을 추가했습니다.
    @Column({ default: false })
    @Field(() => Boolean)
    isSoldOut: boolean;

    // 다대일 관계
    @ManyToOne(() => Lodgment)
    @Field(() => Lodgment)
    lodgment: Lodgment;

    @ManyToOne(() => House)
    @Field(() => House)
    house: House;

    @ManyToOne(() => Night)
    @Field(() => Night)
    night: Night;

    @ManyToOne(() => Room)
    @Field(() => Room)
    room: Room;

    // 다대다 관계
    @JoinTable()
    @ManyToMany(() => ProductTag, (productsTags) => productsTags.products)
    @Field(() => [Product])
    productTags: ProductTag[];
}
