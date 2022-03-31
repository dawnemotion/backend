// https://programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  let answer = 0;

  // 길이가 같다면 하나의 for문으로도 각각의 값에 접근이 가능하다.
  for (let i = 0; i < a.length; i++) {
    let number = a[i] * b[i];
    answer += number;
  }
  return answer;
}

function solution(a, b) {
  //     a를 기준으로 리듀스를해서 acc,cur,i값을 가지고오고 초기값을 0으로 설정후
  //     누적값을 cur 순회하는 처음 값 * b배열의 i인덱스값을 곱해서
  //     같은 길이의 배열인 a,b값을 더해나가서 최종적으로 모든값을 더한값을 반환
  const answer = a.reduce((acc, cur, i) => {
    return acc + cur * b[i];
  }, 0);
  return answer;
}
