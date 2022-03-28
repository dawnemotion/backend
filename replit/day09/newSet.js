// // 문자열로 이루어진 두 배열이 주어졌을 때 두 배열에 모두 갖고 있는 문자의 개수를 출력하는 함수를 만들어주세요.
// let a = ['a', 'b', 'c', 'c', 'b'];
// let b = ['b', 'b', 'b', 'c', 'e', 'e', 'f'];

// function common(arr1, arr2){
//   // Set 객체를 사용해주세요.
//   set1 = new Set(arr1)
//   console.log(set1)






  
//   return nAnswer;
// }

// console.log(common(a, b)); // 2


// 문자열로 이루어진 두 배열이 주어졌을 때 두 배열에 모두 갖고 있는 문자의 개수를 출력하는 함수를 만들어주세요.
let a = ['a', 'b', 'c', 'c', 'b'];
let b = ['b', 'b', 'b', 'c', 'e', 'e', 'f'];


function common(arr1, arr2){
  // Set 객체를 사용해주세요.
  let set1 = new Set(arr1)
  let set2 = new Set(arr2)

  const answer = [...set1].filter(x => set2.has(x))
  
  console.log(answer)
  return answer.length
  
  }
  

common(a,b)
console.log(common(a, b)); // 2