import {checkValidationPhone, getToken, sendTokneToSMS} from './phone.js'

const createTokenOfPhone = () => {

    const isValid = checkValidationPhone()
    if(isValid){

        getToken()

        sendTokneToSMS()
    }
}


createTokenOfPhone("01012345678")
// 핸드폰번호입력

