const apple = 3;
const banana = 2;

console.log("철수는 사과를" + apple + "개," + "바나나를" + banana +"개 가지고 있습니다.") // 평소 작성하던 문구

console.log(`철수는 사과를 ${apple}개 바나나를 ${banana}개 가지고 있습니다.`) // 템플릿 리터럴 이라고 한다.

function getWelComeTemplate(){
    const name = "철수"
    const age = 13
    const school = "다람쥐초등학교"
    const createdAt = "2020-01-02"
    
    return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}살</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>
    
    `

}

getWelComeTemplate()
// 1.펑션을 만들어주고 변수명을 준다.
// 2.return함수를 주고 html함수를 활용하기위해 `백틱 사용
// 3. html body h1 hr 순서대로 작성한다. 안에 내용을 작성해본다.
// 템플릿이란 문서화된 것을 말한다.
// 철수와 나이 학교 등은 고정이라 바뀌지 않는다. 변수로 두어 따로 해본다.
// 이름 나이 학교 만든 날짜를 변수로 빼둔다.
// 변수로 뺴둔 영역을 ${}을 이용해 변경해준다.



