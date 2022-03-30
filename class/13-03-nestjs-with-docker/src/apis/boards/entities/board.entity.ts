// 정보와 연동하기위해 형식을 맞춰야한다.
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// GraphQl타입이라고 알려주는 @Entity
// 클래스처럼 보이지만 GraphQl객체타입이라고 알려준다
@ObjectType()
@Entity()
export class Board {
    // 가장중요한 항목을 Primary로 지정
    // increment 아이디번호가 1씩 증가하면서 생성
    // uuid 는 개별적으로 부여되는 특별한 아이디
    @PrimaryGeneratedColumn('increment')
    @Field(() => Int)
    number: number;

    @Column()
    @Field(() => String)
    writer: string;

    @Column()
    @Field(() => String)
    title: string;

    @Column()
    @Field(() => String)
    contents: string;
}
