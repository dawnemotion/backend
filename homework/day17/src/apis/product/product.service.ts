import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
    // DI주입 데이터베이스에 연결할 수 있는 객체를 주입받는다.
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}

    // 여러개의 정보 조회하기 로직
    async findAll() {
        return await this.productRepository.find();
    }

    // 한개의 정보 조회하기 로직
    async findOne({ id }) {
        return await this.productRepository.findOne({ id: id });
    }

    // 상품 추가하는 로직
    async create({ createProductInput }) {
        // 상품을 데이터베이스에 저장
        const result = await this.productRepository.save({
            ...createProductInput,
        });

        return result;
    }

    // 상품 조회하는 로직

    async checkSoldOut({ id }) {
        const product = await this.productRepository.findOne({ id });

        if (product.isSoldOut) {
            throw new UnprocessableEntityException(
                '이미 판매 완료된 상품입니다.',
            );
        }
    }

    // 상품 수정하는 로직
    async update({ id, updateProductInput }) {
        const product = await this.productRepository.findOne({ id: id });

        const newProduct = {
            ...product,
            ...updateProductInput,
        };

        return await this.productRepository.save(newProduct);
    }
}
