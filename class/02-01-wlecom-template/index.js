const apple = 3;
const banana = 2;

console.log("철수는 사과를" + apple + "개," + "바나나를" + banana +"개 가지고 있습니다.") // 평소 작성하던 문구

console.log(`철수는 사과를 ${apple}개 바나나를 ${banana}개 가지고 있습니다.`) // 템플릿 리터럴 이라고 한다.

function getWelComeTemplate(){

    return `
        <html>
            <body>
                <h1>철수님 가입을 환영합니다!!</h1>
                <hr />
                <div>이름: 철수</div>
                <div>나이: 13살</div>
                <div>학교: 다람쥐초등학교</div>
                <div>가입일: 2020-01-02</div>
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
