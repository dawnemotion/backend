import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
    @Field(() => String)
    name: string;

    @Field(() => String)
    description: string;

    @Field(() => Int)
    price: number;

    @Field(() => Int)
    usedhour: number;

    @Field(() => Int)
    usedpeople: number;

    @Field(() => Boolean)
    isSoldout: boolean;
}
