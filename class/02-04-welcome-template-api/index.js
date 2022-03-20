import { checkValidationEmail,getWelcomeTemplate, sendToEmail } from './user.js'

const createUser = (myuser) => {
    // 1. 이메일이 정상인지 확인(1.존재여부, 2-"@" 포함여부)
    const isValid = checkValidationEmail(myuser.email)
    if(isValid){
        // 2. 가입환영 템플릿 만들기
        const template = getWelcomeTemplate(myuser)
        // 3. 이메일에 가입환영 템플릿 전송하기
        sendToEmail(myuser.email,template)
    }
}


const myuser = {
    name:"철수",
    age: 8,
    school:"다람쥐초등학교",
    email: "a@a.com",
    password:"1234"
}


createUser(myuser)
