// 숫자와 문자가 섞여있는 배열 arr이 주어질 때,
// 숫자는 숫자끼리, 문자는 문자끼리 순서대로 더해
// 새로운 배열에 [숫자합, 문자합] 형태로
// 리턴해주는 함수 solution을 완성하세요.
function solution(arr) {
  let sum = 0;
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    if(typeof(arr[i]) === 'number'){
// typeof는 매개변수가 
			sum += arr[i]
    }else if(typeof(arr[i]) === 'string'){
      str += arr[i]
    }
  }
  return [sum, str];
}
// 경우가 2가지뿐이라면 하나의 경우는 else if 대신 
// else로 빼서 간결하게 로직을 구성하는 것이 좋다.

const arr = [4, 6, 'aa', 2, 'b', 3];

const result = solution(arr);

console.log(result); // [15, "aab"]
