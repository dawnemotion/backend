import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Location {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    location_id: string;

    @Column()
    @Field(() => String)
    location_Address: string;
}
