import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStarbucksInput } from './dto/createStarbucks';
import { Starbucks } from './entities/starbucks.entities';
import { StarbucksService } from './starbucks.service';

@Resolver('/')
export class StarbucksResolver {
    constructor(private readonly starbucksService: StarbucksService) {}

    @Mutation(() => String)
    createStarbucks(
        @Args('drinkname') drinkname: string,
        @Args('price') price: string,
        @Args('kcal') kcal: string,
        @Args('satureatedFat') satureatedFat: string,
        @Args('protein') protein: string,
        @Args('natrium') natrium: string,
        @Args('sugars') sugars: string,
        @Args('caffeine') caffeine: string,
        @Args('createStarbucksInput')
        createStarbucksInput: CreateStarbucksInput,
    ) {
        console.log(drinkname);
        console.log(price);
        console.log(kcal);
        console.log(satureatedFat);
        console.log(protein);
        console.log(natrium);
        console.log(sugars);
        console.log(caffeine);
        console.log(createStarbucksInput);
        return this.starbucksService.createCoffee();
    }
    // code-first로 적용하게되면 리턴타입을 지정해줘야한다. ()안에 type을 지정해준다.
    // 앱모듈에서 스카마파일경로를 지정해주고 여기에서 리턴타입을 지정하게 되면 자동으로 타입이 만들어진다.
    // Query형식으로 데이터를 조회할때 스키마를 entites에서 작성된 파일을 가지고와서 설정
    // GraphQL타입으로 문제점이 있다.
    // Starbucks는 단지 클래스 일뿐 GraphQL타입이라고 알려줘야한다.
    // 조회할때 데이터의 모양이 []로 감싸진 형태라 마찬가지로 타입도 []적용시켜준다.
    @Query(() => [Starbucks])
    fecthStarbucks() {
        return this.starbucksService.findCoffeeList();
    }
}
