const apple = 3;
const banana = 2;

console.log("철수는 사과를" + apple + "개," + "바나나를" + banana +"개 가지고 있습니다.") // 평소 작성하던 문구

console.log(`철수는 사과를 ${apple}개 바나나를 ${banana}개 가지고 있습니다.`) // 템플릿 리터럴 이라고 한다.

function getWelComeTemplate(name,age,school,createdAt){
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

const myname = "철수"
const myage = 13
const myschool = "다람쥐초등학교"
const mycreatedAt = "2020-01-02"


const result = getWelComeTemplate(myname,myage,myschool,mycreatedAt)
console.log(result)

// 1.펑션을 만들어주고 변수명을 준다.
// 2.return함수를 주고 html함수를 활용하기위해 `백틱 사용
// 3. html body h1 hr 순서대로 작성한다. 안에 내용을 작성해본다.
// 템플릿이란 문서화된 것을 말한다.
// 철수와 나이 학교 등은 고정이라 바뀌지 않는다. 변수로 두어 따로 해본다.
// 이름 나이 학교 만든 날짜를 변수로 빼둔다.
// 변수로 뺴둔 영역을 ${}을 이용해 변경해준다.
// 펑션 안에서 선언된 변수를 펑션스코프 밖으로 빼준다음 my~~로 변경해준다.
// 함수 실행 getWelComeTemplate(myname,myage,myschool,mycreatedAt)에 인자를 4개 넣어준다.
// 마찬가지로 펑션에서 매개변수로 name,age,school,createdAt을 넣어준다
// 함수실행부분의 인자와 펑션부분의 매개변수는 서로 매칭된다.
// 리턴때문에 따로 표시가 되지 않아 result 변수명에 담아준다음
// console.log를 이용해 출력해보면 잘 나온다.



