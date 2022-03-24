// 문자열로 이루어진 두 배열이 주어졌을 때 두 배열에 모두 갖고 있는 문자의 개수를 출력하는 함수를 만들어주세요.
let a = ['a', 'b', 'c', 'c', 'b'];
let b = ['b', 'b', 'b', 'c', 'e', 'e', 'f'];

function common(arr1, arr2){
  // Set 객체를 사용해주세요.
  let result = [];
  result = a.concat(b).sort()
  let nAnswer = [];
  for(let i = 0; i<result.length;i++){
    if(result[i]-1 !== nAnswer.includes(result[i])){
      nAnswer.push(result[i])
    }
    // console.log(nAnswer)
  }




  
  return nAnswer;
}

console.log(common(a, b)); // 2