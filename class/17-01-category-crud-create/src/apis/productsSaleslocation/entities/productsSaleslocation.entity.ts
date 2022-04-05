import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// 테이블이라고 알려줘야한다.
// @데코레이터를 선언하고 Entity() 테이블이라고 한다.
@Entity()
@ObjectType()
export class ProductSaleslocation {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    address: string;

    @Column()
    @Field(() => String)
    addressDetail: string;

    @Column()
    @Field(() => Float)
    lat: number;

    @Column()
    // Int는 정수, Floats
    @Field(() => Float)
    lng: number;

    @Column()
    @Field(() => String)
    meetingTime: string;
}
