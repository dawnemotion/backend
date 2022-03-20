const apple = 3
const banana = 2
console.log("철수는 사과를" + apple + "개 바나나를" + banana + "개 가지고 있습니다")
console.log(`철수는 사과를 ${apple}개 바나나를 ${banana}개 가지고 있습니다`)

const getWelcomeTemplate = ({myname,myage,myschool,mycreatedAt}) => {

    return `
        <html>
            <body>
                <h1>${myname}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>이름: ${myname}</div>
                <div>나이: ${myage}</div>
                <div>학교: ${myschool}</div>
                <div>가입일: ${mycreatedAt}</div>
            </body>
        </html>
    `


}

const myuser = {
    myname:"철수",
    myage:8,
    myschool:"다람쥐초등학교",
    mycreatedAt:"2020-01-02"
}

console.log(getWelcomeTemplate(myuser))