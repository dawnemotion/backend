import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductCategory } from './entities/productCategory.entity';
import { ProductCategoryService } from './productCategory.service';

@Resolver()
export class ProductCategoryResolver {
    constructor(
        private readonly productCategoryService: ProductCategoryService,
    ) {}

    @Mutation(() => ProductCategory)
    createProductCategory(
        // 프론트에서 데이터를 받는 부분
        @Args('name') name: string,
    ) {
        // 구조분해 할당으로 인자에 { name }을 넣어준다
        // 서비스에서 리턴한 값을 다시 리턴해서 프론트엔드로 보내준다.
        return this.productCategoryService.create({ name });
    }
}
