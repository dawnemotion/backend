import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Night {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    night_id: string;

    @Column()
    @Field(() => String)
    night_name: string;
}
