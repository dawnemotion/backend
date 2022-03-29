// 하나의 클래스에서 똑같은 내용으로 여러개 만들면 비효율적이다. 
// 그래서 상속이란 방법을 사용하면된다.
// extends를 붙이면된다.

class SkyUnit {

    run = () => {
        console.log("날라서 도망가자.")
    }

}

class GroundUnit {

    constructor(qqq){

    }

    run = () => [
        console.log("뛰어서 도망가자!!")
    ]

}

class Monster extends GroundUnit{

    constructor(aaa){
        super(300)
    }

    power = 10

    attack = () => {
        console.log(`공 격 하 자 ! ! `)
        console.log(`공격하자 내 공격력은 ${this.power}이다.`)
    }

    
}

const mymonster1 = new Monster(10)
mymonster1.attack()
mymonster1.run()
