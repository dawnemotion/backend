import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}

    async findAll() {
        return await this.productRepository.find();
    }

    async findOne({ productId }) {
        return await this.productRepository.findOne({
            where: { id: productId },
        });
    }

    async create({ createProductInput }) {
        // 카테고리를 데이터베이스에 저장
        // 객체에서 키값과 밸류값이 같으면 키값만 있어도 된다.
        // result에 담아준 다음 프론트로 리턴해준다.
        const result = await this.productRepository.save({
            // 스프레드 연산자로 한줄로 긁어오기
            ...createProductInput,

            // 하나하나 직접 나열하기
            // name: createProductInput.name,
            // description: createProductInput.description,
            // price: createProductInput.price,
        });
        console.log(result);
        return result;
    }

    // 수정하기
    async update({ productId, updateProductInput }) {
        // 특정 정보로 찾아온 정보를 가지고와서 담아준다음
        const product = await this.productRepository.findOne({
            where: { productId },
        });

        const newProduct = {
            // 스프레드연산자를 두번 이용시 같은 이름의 키는 적용되지않는다.
            ...product,
            ...updateProductInput,

            // id: product.id,
            // name: product.name,
            // description: product.description, // updateProductInpus.description
            // price: product.price, // updateProductInputs.price
            // isSoldout: product.isSoldout,
        };

        return await this.productRepository.save(newProduct);
    }

    async checkSoldout({ productId }) {
        const product = await this.productRepository.findOne({
            where: { id: productId },
        });

        if (product.isSoldout)
            throw new UnprocessableEntityException(
                '이미 판매 완료된 상품입니다.',
            );

        // if (product.isSoldout) {
        //     // 예외처리 -> httpException을 이용한다.
        //     // Exception(이 안에는 메시지와 상태코드를 넣을 수 있다.)
        //     // 일반적인 숫자로 상태코드를 작성하면 나중에 유지보수때 힘이 든다
        //     // HttpStatus를 이용한다.
        //     throw new HttpException(
        //         '이미 판매 완료된 상품입니다.',
        //         HttpStatus.UNPROCESSABLE_ENTITY,
        //     );
        // }
    }
}
