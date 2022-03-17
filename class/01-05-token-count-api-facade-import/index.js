import {checkValidationPhone, getToken, sendTokenToSMS} from './phone.js'

const createTokenOfPhone = (myphone) => {

    const isValid = checkValidationPhone(myphone)
    if(isValid){

        getToken()

        sendTokenToSMS(myphone,result)
    }
}


createTokenOfPhone("01012345678")
// 핸드폰번호입력

