import { InputType, PartialType } from '@nestjs/graphql';
import { CreateProductInput } from './createProduct.input';

@InputType()
// dto에 적히는 부분들은 필수로 적어야 한다.
// 하지만 수정시에는 모든 부분에 필수로 입력할 필요가 없다.
// 고치고 싶은 부분만 하고싶다 어떻게해야할까?
// !를 빼줘야한다.
// 하지만 매번 수정시 dto를 새로 작성한다면 나중에 문제가된다.
// 재사용성을 늘려 기존에 작성한 문서를 사용한다.
// extends를 사용해 기존의 문서의 양식을 가지고 오고
// PartialType << 필수적인 요건들을 다 풀어준다.
export class UpdateProductInput extends PartialType(CreateProductInput) {}
