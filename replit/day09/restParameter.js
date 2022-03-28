// 인수로 전달된 숫자들의 총함을 구하는 함수를 만들어주세요.

//RestParameter를 사용해주세요.
function sum4(...args){
  let total =  0;
  // 총 값
  console.log(args)

  return args.reduce((acc,cur) => { 
      return acc+cur
  },0)


  // for문
  // for(let i = 0; i < args.length;i++)
    // total += args[i]

  // forof문
  // for(let sum of args){
  //   total += sum
  // }
  
  // return total
}
// sum4(5,7,2)

console.log(sum4(5,7,2)); // 14

