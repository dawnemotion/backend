import { MainArea } from 'src/apis/main_area/entities/main.area.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SubArea {
    @PrimaryGeneratedColumn('uuid')
    sub_area_id: string;

    @Column()
    sub_area_name: string;

    // 다대다 관계
    @ManyToOne(() => MainArea)
    mainArea: MainArea;
}
