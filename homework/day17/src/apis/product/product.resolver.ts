import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
    constructor(private readonly productService: ProductService) {}

    // 목록조회하기
    // 여러개의 정보를 배열로 받아온다
    @Query(() => [Product])
    fetchProducts() {
        return this.productService.findAll();
    }

    // 한개만 특정해서 조회하기
    // 1개만 받아온다
    @Query(() => Product)
    fetchProduct(
        @Args('id') id: string, //
    ) {
        return this.productService.findOne({ id });
    }

    // 상품추가하기
    // 프론트엔드에서 받는 타입을 지정해준다.
    @Mutation(() => Product)
    createProduct(
        // 입력항목이 많으면 input type으로 만들어준다.
        @Args('createProductInput') createProductInput: CreateProductInput, //
    ) {
        return this.productService.create({ createProductInput });
    }

    // 상품수정하기
    @Mutation(() => Product)
    async updateProduct(
        @Args('id') id: string,
        @Args('updateProductInput') updateProductInput: UpdateProductInput,
    ) {
        // 판매 여부 확인
        await this.productService.checkSoldOut({ id });
        // 수정하기
        return await this.productService.update({ id, updateProductInput });
    }
}
