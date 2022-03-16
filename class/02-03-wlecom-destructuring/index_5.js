const apple = 3;
const banana = 2;

console.log("철수는 사과를" + apple + "개," + "바나나를" + banana +"개 가지고 있습니다.") // 평소 작성하던 문구

console.log(`철수는 사과를 ${apple}개 바나나를 ${banana}개 가지고 있습니다.`) // 템플릿 리터럴 이라고 한다.

function getWelComeTemplate(myname, myage, myschool, createdAt){

    // 여기서 오늘 날짜로 만들기!!!
    const aaa = new Date() // 현재 시간을 나타낸다
    const yyyy = aaa.getFullYear() // 현재시간에서 년도를 구한다.
    const mm = String(aaa.getMonth()+1).padStart(2,"0") // 현재시간에서 달을 구한다.
    const dd = String(aaa.getDate()).padStart(2,"0") // 일자를 구한다.
    const createdAt = `${yyyy}-${mm}-${dd}` // year + "-" + month + "-" + date yyyy는 년도의 4자리수 mm은 월의 2자리수 dd는 일의 2자리수

    return `
        <html>
            <body>
                <h1>${myname}님 가입을 환영합니다!!</h1>
                <hr />
                <div>이름: ${myname}</div>
                <div>나이: ${myage}살</div>
                <div>학교: ${myschool}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>
    
    `

}

const myuser = {
    myname:"철수",
    myage:13,
    myschool:"다람쥐초등학교",
}

const result = getWelComeTemplate(myuser)
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
// const로 선언된 개인정보들을 하나의 객체로 만들어준다.
// myuser로 하나의 객체로 만들어주고
// 함수 실행부분에서 인자를 myuser로 변경해준다.
// 펑션부분의 매개변수를 user로 하나의 매개변수로 변경해준다. 인자와 매개변수가 매칭이된다.
// user를 구조분해 할당으로 보내주려고한다.
// 펑션의 매개변수에 aaa를 입력해준다.
// 그러면 aaa = myuser가 된다. 하지만 aaa 하나의 변수로만 받으
// aaa의 자리에 매개변수 getWelComeTemplate(myname, myage, myshool, mycreatedAt)를 넣어준다. 구조분해할당으로 키값을 주었기때문에
// 매개변수의 순서는 상관이 없다. 구조상 안전해진다.
// 리턴값에 있는 변수명을 매개변수와 통일시켜준다.
// 가입일이 객체에 키와 값으로 있는데 현실상 날짜는 컴퓨터의 날짜로 사용한다.
// 객체에 있는 날짜를 지운다.

// 펑션안에 날짜를 구하는 함수를 만든다
// 


