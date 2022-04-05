import { Field, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/apis/product/entities/product.entity';
import { SubArea } from 'src/apis/sub_area/entities/sub.area.entity';
import { User } from 'src/apis/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Reservation {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    lodgment_id: string;

    @Column()
    @Field(() => String)
    lodgment_name: string;

    @Column()
    @Field(() => String)
    lodgment_callnumber: string;

    @Column()
    @Field(() => String)
    lodgment_intro: string;

    // 다대일 관계
    @ManyToOne(() => User)
    @Field(() => User)
    user: User;

    @ManyToOne(() => SubArea)
    @Field(() => SubArea)
    subarea: SubArea;

    @ManyToOne(() => Product)
    @Field(() => Product)
    product: Product;
}
