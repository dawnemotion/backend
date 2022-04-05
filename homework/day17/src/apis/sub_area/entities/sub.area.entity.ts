import { Field, ObjectType } from '@nestjs/graphql';
import { MainArea } from 'src/apis/main_area/entities/main.area.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class SubArea {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    sub_area_id: string;

    @Column()
    @Field(() => String)
    sub_area_name: string;

    // 다대다 관계
    @ManyToOne(() => MainArea)
    @Field(() => MainArea)
    mainArea: MainArea;
}
