// https://programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    let number = a[i] * b[i];
    answer += number;
  }
  return answer;
}
