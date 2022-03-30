// https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  addNum = 0;
  str = x.toString().split("");
  for (let i = 0; i < str.length; i++) {
    addNum += Number(str[i]);
  }
  return x % addNum === 0 ? true : false;
}

function solution(x) {
  let sum = 0;
  x = String(x);
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }
  //     비교값 자체가 true,false 값을 반환하기떄문에 삼항연산자 xxx
  return x % sum === 0;
}

function solution(x) {
  const sum = x
    .toString() // String(x)
    .split("") //
    .reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0);
  return x % sum === 0;
}
