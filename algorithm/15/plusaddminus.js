// https://programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      answer += +absolutes[i];
    } else {
      answer += -absolutes[i];
    }
  }
  return answer;
}

function solution(absolutes, signs) {
  const answer = absolutes.reduce((acc, cur, i) => {
    return acc + (signs[i] ? cur : -cur);
  }, 0);
  return answer;
}
