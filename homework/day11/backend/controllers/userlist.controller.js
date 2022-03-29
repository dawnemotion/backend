import { Profile } from '../models/user.model.js'

export class UserListGet{
    getuserlist = async(req, res)=> {
    // DB에 저장된 프로필의 목록
    const profileList = await Profile.find()
  
    // DB결과값 반환
    res.send(profileList);
  }
}