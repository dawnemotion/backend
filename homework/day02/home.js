import { checkValidationEmail, checkValidationPeopleNumber, checkValidationPhoneNumber, 
    checkValidationSite, getWelComeTemplate, sendTemplateToEmail } from "./template-ver2.js"

const createdUser = (profile) => {

    const isValid = checkValidationEmail(profile.email)

    const isValidPn = checkValidationPeopleNumber(profile.peoplenumber)

    const isValidPhoneNumber = checkValidationPhoneNumber(profile.phonenumber)

    const isValidSite = checkValidationSite(profile.favoritesite)

    if(isValid && isValidPn && isValidPhoneNumber && isValidSite){

            const mytemplate = getWelComeTemplate(profile)
            
            sendTemplateToEmail(profile.email, mytemplate )
    }
}

//퍼사드 패턴을 위해 프로필의 4가지 영역의 유효성 검사 펑션 작성
//템플릿 페이지 따로 작성
//이메일 발송 작성

const profile = {
    email:"nextdodream@gmail.com",
    peoplenumber:"123456-7891011",
    phonenumber:"010-1234-5678",
    favoritesite:"google.com"
}


createdUser(profile)