console.log("안녕하세요");

const getToken = () => {
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
    console.log(result)
}

// 위 부분은 함수식만 만들어 놓은것이고 실행은 되지 않는다.

getToken();
// 함수식을 입력해 함수가 실행되게 만든다.

const add = (a,b) => {
    const result = a + b;
    console.log(result)
}
// 함수구성

add(4,5);
// 함수실행

