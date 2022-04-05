import { House } from 'src/apis/house/entities/house.entity';
import { Lodgment } from 'src/apis/lodgment/entities/lodgment.entity';
import { Night } from 'src/apis/night/entities/night.entity';
import { ProductTag } from 'src/apis/productTag/entities/productTag.entity';
import { Room } from 'src/apis/room/entities/room.entity';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    product_id: string;

    @Column()
    product_name: string;

    @Column()
    price: number;

    @Column()
    used_hour: number;

    @Column()
    used_people: number;

    // 다대일 관계
    @ManyToOne(() => Lodgment)
    lodgment: Lodgment;

    @ManyToOne(() => House)
    house: House;

    @ManyToOne(() => Night)
    night: Night;

    @ManyToOne(() => Room)
    room: Room;

    // 다대다 관계
    @JoinTable()
    @ManyToMany(() => ProductTag, (productsTags) => productsTags.products)
    productTags: ProductTag[];
}
