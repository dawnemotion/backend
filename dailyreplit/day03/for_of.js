// 숫자로만 이루어진 배열이 있습니다.
// for-of를 이용해 숫자의 총합을 구해주세요.

const arr = [11, 22, 33, 44, 55];
let sum = 0;
let i = 0;
// for-of
for(const element of arr){
  sum += element
}

// // while문
// // i를 따로 변수로 선언해주고
// while(i < arr.length){
//   // while 조건문안에 조건을 넣어준다음
//   sum += arr[i]
//   // sum에 arr[i]만큼 더해준다.
//   i++
//   // i는 계속 더한다.
}

console.log(sum); // 165
