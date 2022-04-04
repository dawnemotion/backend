import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// 테이블이라고 알려줘야한다.
// @데코레이터를 선언하고 Entity() 테이블이라고 한다.
@Entity()
export class ProductSaleslocation {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    address: string;

    @Column()
    addressDetail: string;

    @Column()
    lat: number;

    @Column()
    lng: number;

    @Column()
    meetingTime: string;
}
