import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    user_id: string;

    @Column()
    @Field(() => String)
    user_name: string;

    @Column()
    @Field(() => String)
    user_phone: string;

    @Column()
    @Field(() => Int)
    user_age: number;
}
