import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class House {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    house_id: string;

    @Column()
    @Field(() => String)
    house_name: string;
}
