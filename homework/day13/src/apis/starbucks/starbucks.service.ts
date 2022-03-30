import { Injectable } from '@nestjs/common';

@Injectable()
export class StarbucksService {
    createCoffee() {
        // 커피를 등록하는 로직

        return '등록에 성공했습니다.';
    }

    // 커피목록 5개 하드코딩해서 출력
    findCoffeeList() {
        return [
            {
                drinkname: '카페라떼',
                price: '8500',
                kcal: '850',
                satureatedFat: '150',
                protein: '50',
                natrium: '120',
                sugars: '500',
                caffeine: '200',
            },
            {
                drinkname: '카페모카',
                price: '9000',
                kcal: '900',
                satureatedFat: '50',
                protein: '150',
                natrium: '320',
                sugars: '200',
                caffeine: '400',
            },
            {
                drinkname: '카라멜마끼아또',
                price: '12300',
                kcal: '1230',
                satureatedFat: '250',
                protein: '350',
                natrium: '520',
                sugars: '1000',
                caffeine: '100',
            },
            {
                drinkname: '플레인요구르트',
                price: '30500',
                kcal: '1230',
                satureatedFat: '1150',
                protein: '250',
                natrium: '1320',
                sugars: '5010',
                caffeine: '2100',
            },
            {
                drinkname: '아이스아메리카노',
                price: '12300',
                kcal: '840',
                satureatedFat: '10',
                protein: '540',
                natrium: '1220',
                sugars: '0',
                caffeine: '1200',
            },
        ];
    }
}
