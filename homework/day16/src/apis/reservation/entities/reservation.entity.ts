import { Product } from 'src/apis/product/entities/product.entity';
import { SubArea } from 'src/apis/sub_area/entities/sub.area.entity';
import { User } from 'src/apis/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reservation {
    @PrimaryGeneratedColumn('uuid')
    lodgment_id: string;

    @Column()
    lodgment_name: string;

    @Column()
    lodgment_callnumber: string;

    @Column()
    lodgment_intro: string;

    // 다대일 관계
    @ManyToOne(() => User)
    user: User;

    @ManyToOne(() => SubArea)
    subarea: SubArea;

    @ManyToOne(() => Product)
    product: Product;
}
