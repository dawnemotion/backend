import { Location } from 'src/apis/location/entities/location.entity';
import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Lodgment {
    @PrimaryGeneratedColumn('uuid')
    lodgment_id: string;

    @Column()
    lodgment_name: string;

    @Column()
    lodgment_callnumber: number;

    @Column()
    lodgment_intro: string;

    // 1:1관계
    @JoinColumn()
    @OneToOne(() => Location)
    location: Location;
}
