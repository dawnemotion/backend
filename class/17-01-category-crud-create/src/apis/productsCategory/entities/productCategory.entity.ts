import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

// 테이블이라고 알려줘야한다.
// @데코레이터를 선언하고 Entity() 테이블이라고 한다.
@Entity()
// a GraphQL output type for the "createProductCategory". Make~ 시작되는 오류는 타입이 graphQl의 타입이 정의되지않았다.
// 스키마 타입이 정의되지 않았다.
// graphql은 input과 Objcet가 있다. 인풋이 아니면 나머지는 다 오브젝트타입
// 필드를 추가해주면 code-first로 인해 schema.gql에 자동으로 추가가된다.
@ObjectType()
export class ProductCategory {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    // unique: true는 한개만 있어야한다.
    // nullable: 빈값이 들어가도 괜찮냐는 것 true
    @Column({})
    @Field(() => String)
    name: string;
}
