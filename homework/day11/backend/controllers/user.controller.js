import { Profile } from '../models/user.model.js'
import { CheckPersonalService } from './services/personal.service.js'
import { SiteCheck } from './services/site.service.js'
import { Token } from '../models/token.model.js'
import { UserMailService } from '../controllers/services/user.service.js'

export class JoinUser{
    join = async (req, res) => {
        // 유저정보
        const user = req.body
        const name = req.body.name
        const email = req.body.email
        const prefer = req.body.prefer
        const pwd = req.body.pwd
        const phone = req.body.phone
        // 주민등록번호 뒷자리 마스킹처리
        const checkPersonalService = new CheckPersonalService()
        checkPersonalService.peopleNumber(req.body.personal);
        // 핸드폰번호로 DB검색
        const inquireNumber = await Token.findOne({phone:phone})
        // 입력받은 핸드폰번호로 DB에 검색했을때 정보가 없거나 isAuth가 false인 경우
        if(inquireNumber === null || inquireNumber.isAuth === false){
            res.status(422).send('에러!! 핸드폰 번호가 인증되지 않았습니다!');
            console.log("휴대폰 번호 인증부터 진행해주세요!")
        // 입력한 번호가 있고 isAuth가 true인 경우(인증번호가 확인이 된 경우)
        }else{
            // 입력한 사이트를 스크래핑
            const siteCheck = new SiteCheck()
            const getOg = await siteCheck.site(prefer)
            // 스크래핑한 사이트와 입력받은 프로필저장
            const getProfile = await new Profile({
            name:name, email:email,personal:checkPersonalService.peopleNumber(req.body.personal), prefer:prefer,
            pwd:pwd, phone:phone, og:getOg})
            // DB에 저장
            await getProfile.save()
            
            // 회원가입 이메일 전송
            const userMailService = new UserMailService()
            const isValid = userMailService.checkValidationEmail(email)
            if(isValid){
            // 2. 가입환영 템플릿 만들기
            const template = userMailService.getWelcomeTemplate(user)
            // 3. 이메일에 가입환영 템플릿 전송하기
            const send = await userMailService.sendToEmail(name, email, template)
            // 결과창에 ID값 반환
            res.send(getProfile._id)
            }  
        }
    }
}