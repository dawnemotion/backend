import {checkValidationPhone,getToken,sendToSms} from './phone.js'

console.log("안녕하세요");

// 핸드폰 토큰 생성하는 api
const createTokenOfPhone = (myphone) => {
    // 1.핸드폰 자릿수 확인하기
    const isValid = checkValidationPhone(myphone)
    if(isValid){
        // 2. 핸드폰 토큰 6자리 만들기
        const token = getToken()
        // 3. 핸드폰으로 토큰 전송하기
        sendToSms(myphone,token)
    }
}

createTokenOfPhone("01023340224")
