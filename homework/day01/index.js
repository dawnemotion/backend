//     4. 함수는 퍼사드패턴이 적용되어야 합니다. 
//         - 필요시 새로운 파일도 생성 가능합니다. - 파일명 자유

import {checkValidationNumber,checkDash,masking} from './resident-registration-number1.js' 

export const PeopleNumber = (personal) => {
    
    const isValid = checkValidationNumber(personal)
    if(isValid){
        checkDash()

        masking()
    }
}

//     5. 함수에 “920324-1038293”를 넣어 실행했을 때, 콘솔에 출력된 **화면**과 **코드**를 작성한 파일을 클래스룸에 제출해주세요.
PeopleNumber("920324-1038293");