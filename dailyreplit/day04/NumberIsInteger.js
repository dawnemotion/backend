/*
  어떤 숫자 num이 주어졌을 때, 
  Number.isInteger()를 이용해
  정수라면 그대로 두고,
  실수라면  Math.ceil()을 이용해 올림을 해주는 함수 solution을 완성해주세요.
*/
function solution(num) {
	if(Number.isInteger(num) === true){
//     Number.isInteger 는 매개변수로 받은 인자가 정수일때 true값으로 반환해준다
    return num
//     조건에 맞을 경우 받은 인자를 그대로 돌려주면된다.
  }else if(Number.isInteger(num) === false){
//     마찬가지로 받은 인자가 실수일 때 false로 반환되기때문에
		return Math.ceil(num)
//     받은 인자를 올림해서 반환한다.
  }
}

console.log(solution(3)); // 3
console.log(solution(3.3)); // 4
