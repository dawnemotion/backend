import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
    constructor(private readonly productService: ProductService) {}

    // 목록조회는 query를 배열형태로 받아야한다
    @Query(() => [Product])
    fetchProducts() {
        return this.productService.findAll();
    }

    @Query(() => Product)
    fetchProduct(
        @Args('productId') productId: string, //
    ) {
        return this.productService.findOne({ productId });
    }

    @Mutation(() => Product)
    createProduct(
        // 프론트에서 데이터를 받는 부분
        // 데이터를 받을대 여려개의 항목이 있으면 dto폴더에 인풋타입을 만들어준다.
        @Args('createProductInput') createProductInput: CreateProductInput,
    ) {
        // 구조분해 할당으로 인자에 { name }을 넣어준다
        // 서비스에서 리턴한 값을 다시 리턴해서 프론트엔드로 보내준다.
        return this.productService.create({ createProductInput });
    }

    @Mutation(() => Product)
    async updateProduct(
        @Args('productId') productId: string,
        @Args('updateProductInput') updateProductInput: UpdateProductInput,
    ) {
        // 판매 완료가 되었는지 확인해보기
        await this.productService.checkSoldout({ productId });
        // 수정하기
        return await this.productService.update({
            productId,
            updateProductInput,
        });
    }
}
