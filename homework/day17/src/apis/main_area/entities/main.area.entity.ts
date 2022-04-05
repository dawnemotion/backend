import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class MainArea {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    main_area_id: string;

    @Column()
    @Field(() => String)
    main_area_name: string;
}
