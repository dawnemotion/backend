class Racing{
    
    stopNgo = () => {
        console.log("100미터가고 멈추세요")
    }
    
}


class myCar extends Racing{

    power = 2000
    color = "red"
    type = "sportcar"


    start = () => {
        console.log("출발합니다")
        console.log(`내 차의 색은${this.color}이다`)
        console.log(`내 차의 종류는 ${this.type}이다`)
    }

    stop = () => {
        console.log("멈춥니다.")
        console.log(`내 차의 마력은 ${this.power}이다`)
    }

}

const mycar = new myCar()
mycar.start()
mycar.stop()
mycar.stopNgo()
const mycar2 = new myCar(3000)
mycar2.stop()