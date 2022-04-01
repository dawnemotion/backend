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

function solution(arr1, arr2) {
  //     배열을 순회하는 map메소드사용
  //     반환은 새로운 배열을 반환한다.
  //     배열을 반환하는 메소드를 2개사용하니 배열안에 배열이 존재하는 값을 반환한다.
  const answer = arr1.map((num1, i) => {
    return num1.map((num2, l) => {
      return num2 + arr2[i][l];
    });
  });
  return answer;
}
