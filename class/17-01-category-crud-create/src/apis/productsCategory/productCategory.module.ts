import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategory } from './entities/productCategory.entity';
import { ProductCategoryResolver } from './productCategory.resolver';
import { ProductCategoryService } from './productCategory.service';

@Module({
    // 서비스에도 카테고리로 넣어준다.
    imports: [TypeOrmModule.forFeature([ProductCategory])],
    // providers에 Service를 넣어준다. DI하는 것
    providers: [
        ProductCategoryResolver, //
        ProductCategoryService, //
    ],
})
export class ProductCategoryModule {}

// 클래스 리졸버 서비스에 각각 클래스를 만들어주고
// export를 해준다. 그리고 데코레이터를 달아준다.
//
