import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategory } from './entities/productCategory.entity';

@Injectable()
export class ProductCategoryService {
    constructor(
        @InjectRepository(ProductCategory)
        private readonly productCategoryRepository: Repository<ProductCategory>,
    ) {}

    async create({ name }) {
        // 카테고리를 데이터베이스에 저장
        // 객체에서 키값과 밸류값이 같으면 키값만 있어도 된다.
        // result에 담아준 다음 프론트로 리턴해준다.
        const result = await this.productCategoryRepository.save({ name });
        console.log(result);
        return result;
    }
}
