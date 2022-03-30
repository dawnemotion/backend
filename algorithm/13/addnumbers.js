// https://programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  let answer = 0;

  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  return answer;
}

function solution(numbers) {
  let answer = 0;

  return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}

function solution(numbers) {
  const answer = new Array(9).fill(1).reduce((acc, cur, i) => {
    const num = cur + i;
    return acc + (numbers.includes(num) ? 0 : num);
  }, 0);
  return answer;
}
