//assignment
const reverseStr = (list)=>{
let newList = list.reverse()
// 아래에 코드를 작성해주세요.
// 아스키 코드 값 대문자 A(65)~Z(90) 소문자 a(97)~(122)
let answer = new Array(list.length).fill("")
for(let i = 0; i<newList.length; i++){
	for(let j = 0; j<newList[i].length;j++){
		if(list[i][j].charCodeAt() >= 97){
			answer[i] += newList[i][j].toUpperCase()
		}else if(list[i][j].charCodeAt() < 97){
			answer[i] += newList[i][j].toLowerCase()
			}
		}
	}
  console.log(answer)
return answer.join(" ")
}
module.exports = reverseStr;

