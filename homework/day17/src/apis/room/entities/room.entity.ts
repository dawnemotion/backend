import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Room {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    room_id: string;

    @Column()
    @Field(() => String)
    room_name: string;
}
