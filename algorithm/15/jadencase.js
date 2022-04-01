// https://programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  s = s.toLowerCase();

  let idx = 0;
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];

    if (letter === " ") {
      //             공백이라면, idx를 초기화 한다.
      idx = 0;
    } else {
      if (idx === 0) {
        //                 단어의 가장 앞부분을 체크한다.
        letter = s[i].toUpperCase();
      }
      idx++;
    }
    answer += letter;
    console.log(answer);
  }
  return answer;
}

function solution(s) {
  s = s
    .toLowerCase()
    .split(" ")
    .map((word) => {
      // substring 문자열에서만 사용가능
      // slice와 동일한 기능을 제공한다.
      return word !== "" ? word[0].toUpperCase() + word.substring(1) : word;
    });
  return s.join(" ");
}
