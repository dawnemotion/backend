import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateStarbucksInput {
    @Field(() => String)
    drinkname: string;

    @Field(() => String)
    price: string;

    @Field(() => String)
    kcal: string;

    @Field(() => String)
    satureatedFat: string;

    @Field(() => String)
    protein: string;

    @Field(() => String)
    natrium: string;

    @Field(() => String)
    sugars: string;

    @Field(() => String)
    caffeine: string;
}
