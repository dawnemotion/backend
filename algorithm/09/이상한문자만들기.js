function solution(s) {
    var answer = '';
    
//     단어별로 인덱스를 구분하기 위해 사용
    let idx = 0;
    for(let i = 0; i < s.length; i++){
        if( s[i] === " " ){
            answer += s[i]; /// === " "
            idx = 0;
        } else {
            answer += idx % 2 === 0
            ? s[i].toUpperCase()
            : s[i].toLowerCase()
            idx++
        }
    }
    return answer
}

