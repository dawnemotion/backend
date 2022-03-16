import { checkValidationEmail, getWelComeTemplate, sendTemplateToEmail } from "./index.js"

function createdUser(user){
    const isValid = checkValidationEmail(user.email)
    if(isValid){
        const mytemplate = getWelComeTemplate(user)

        sendTemplateToEmail(user.email, mytemplate)
    }
}

const myuser = {
    name:"철수",
    age: 8,
    school: "다람쥐초등학교",
    email: "a@a.com",
    password: "1234"
}

createdUser(myuser) // 함수 실행부분

// 1.펑션을 만들어준다. 메일 보내는 부분을 만들어본다.
// 2. const로 myuser 객체를 만들어준다. 지금은 하드코딩(직접 일일이 치는 코딩)으로 입력한다.
// 3. a단계로 이동해서 코드 작성
