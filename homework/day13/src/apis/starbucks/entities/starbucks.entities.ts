import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// entities를 포함한 거의 모든걸 class로 작성
// @Entity 로 데이터라고 알려줘야한다.
// GraphQl타입 데이터로 인식시키기 위해 @ObjectType을 설정

@ObjectType()
@Entity()
export class Starbucks {
    // 데이터베이스에서 중복되지 않아야하는 컬럼일 때 적용한다.
    @PrimaryGeneratedColumn('increment')
    @Field(() => String)
    drinkname: string;

    @Column()
    @Field(() => String)
    price: string;

    @Column()
    @Field(() => String)
    kcal: string;

    @Column()
    @Field(() => String)
    satureatedFat: string;

    @Column()
    @Field(() => String)
    protein: string;

    @Column()
    @Field(() => String)
    natrium: string;

    @Column()
    @Field(() => String)
    sugars: string;

    @Column()
    @Field(() => String)
    caffeine: string;
}

// - 음료명
// - 가격
// - 1회 제공량 (kcal)
// - 포화지방 (g)
// - 단백질 (g)
// - 나트륨 (mg)
// - 당류 (g)
// - 카페인 (mg)
