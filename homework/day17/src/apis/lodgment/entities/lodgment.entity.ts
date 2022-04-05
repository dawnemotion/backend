import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Location } from 'src/apis/location/entities/location.entity';
import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Lodgment {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    lodgment_id: string;

    @Column()
    @Field(() => String)
    lodgment_name: string;

    @Column()
    @Field(() => Int)
    lodgment_callnumber: number;

    @Column()
    @Field(() => String)
    lodgment_intro: string;

    // 1:1관계
    @JoinColumn()
    @OneToOne(() => Location)
    @Field(() => Location)
    location: Location;
}
