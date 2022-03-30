//https://programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
  let answer = 0;
  if (a <= b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  }
  return answer;
}

function solution(a, b) {
  let answer = 0;
  // 작은 수
  min = Math.min(a, b);
  // 큰수
  max = Math.max(a, b);

  for (let i = min; i <= max; i++) {
    answer += i;
  }
  return answer;
}

function solution(a, b) {
  let answer = 0;
  if (a === b) {
    return a;
  } else {
    // const min = a > b ? a : b
    const min = Math.min(a, b);
    // const max = a < b ? a : b
    const max = Math.max(a, b);

    console.log(min, max);

    for (let i = min; i <= max; i++) {
      answer += i;
    }
  }
  return answer;
}

function solution(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  const answer = new Array(max - min).fill(1).reduce((acc, cur, i) => {
    const num = min + cur + i;
    return acc + num;
  }, min);
  return answer;
}
