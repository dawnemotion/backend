// https://www.notion.so/newbizstart/e1b14cff19c74457b3b899180c4fbb92

function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    letitgo = [];
    for (let j = 0; j < arr1[i].length; j++) {
      letitgo.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(letitgo);
  }
  return answer;
}
