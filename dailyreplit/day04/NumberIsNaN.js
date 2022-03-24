/* 문자열로 이루어진 배열이 있습니다.
   "123"처럼 숫자로 읽을 수 있는 문자도 있고,
   "1a"처럼 숫자로 읽을 수 없는 문자도 있습니다. 

   이 배열이 주어질 때 
   숫자로 읽을 수 있는 경우에는 숫자로 바꿔
   총 합을 리턴하는 함수 solution을 완성해주세요.
*/
function solution(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
//     배열의 갯수만큼 반복하는 반복문
    if(isNaN(arr[i]) === false){
// isNaN을 을 이용해 arr의 i번째 인덱스가 숫자(반환값 false)일 경우 
      sum += Number(arr[i])
// 만족하는 조건의 arr[i]를 숫자로 바꾸어 sum에 더해라  
    }
  }
  return sum;
}

const arr = ['1', '2w', '3', 'qwer'];

const result = solution(arr);

console.log(result); // 4