console.log("안녕하세요");

const getToken = (count) => {

    if(count <= 0 ){
        console.log("에러발생, 입력값이 너무 작습니다.")
        return
    }else if(count > 10){
        console.log("에러발생, 입력값이 너무 큽니다")
        return
    }else if(count === undefined){
        console.log("에러발생, 숫자를 입력해주세요")
        return
    }

    console.log(String(Math.floor(Math.random() * 10**count)).padStart(count,"0"))
}
// 인자로 받은 매개변수가 1자리 혹은 10자리 수가 넘어가면 연산이 되지 않게끔 분기점을 설정해줘야한다.


getToken(10)
// 인자로 내가 원하는 값을 입력 했을때 함수가 실행도되도록 해보자