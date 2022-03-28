// 배열의 모든 element가 숫자라면 true,
// 하나라도 숫자가 아니라면 false를 리턴하도록
// 콜백 함수 solution 함수를 완성하세요.

function solution(element, index, array) {
  return typeof(element) === 'number'
//   every는 조건에 맞으면 계속해서 순회하고
//   맞지 않으면 멈추고 false를 반환해주기떄문에
//   if문은 작성하지않고 return에 바로 조건을 작성해준다.
}

const result1 = [1, 2, 3, 4, 5].every(solution) 
console.log('result1', result1) // true

const result2 = [1, 2, 3, '4', 5].every(solution) 
console.log('result2', result2) // false

