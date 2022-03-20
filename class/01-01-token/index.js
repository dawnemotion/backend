console.log("안녕하세요");

const getToken = () => {
    console.log(String(Math.floor(Math.random() * 100000)).padStart(6,"0"))
}
// 함수 선언 부분 이 자체로는 실행이 되지 않는다

getToken()
// 함수 실행 부분