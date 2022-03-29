import express from 'express'
const app = express()

const aaa = new Date()
console.log(aaa.getFullYear())
// 월을 구하는 부분에서는 +1을 해준다.
console.log(aaa.getMonth()+1)


// 클래스를 직접 만든다.
class Monster {
    
    // monster2를 만들때 인자를 넣으면 
    // 그 인자는 constructor에 그 값이 들어간다.
    constructor(aaa){
        this.power = aaa
    }

    // 함수에도 펑션을 안붙이는 것처럼 내장객체 안에서는 let,const 등을 선언하지 않는다.
    power = 10


    // 함수부분 화살표함수로도 변경이 가능하다.
    // this를 사용해야 자기 자신의 변수를 활용이 가능하다.
    attack = () => {
        console.log("공격하자")
        console.log(`내 공격력은 ${this.power}이다.`)
    }
    
    run = () => {
        console.log("도망가자")
    }



}

// 내장객체를 직접 만드는 방법
const mymonster1 = new Monster(10)
mymonster1.attack()
mymonster1.run()
// 작동원리는 new Date()
// .getFullyear() 등과 같다.

const mymonster2 = new Monster(50)
mymonster2.attack()
mymonster2.run()

const loginService = new LoginService()
loginService.login()
loginService.logout()
loginService.loginCheck()

