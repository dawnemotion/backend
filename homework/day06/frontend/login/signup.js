const getValidationNumber = async () => {
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  console.log('인증 번호 전송')
  const myphone01 = document.getElementById("PhoneNumber01").value
  const myphone02 = document.getElementById("PhoneNumber02").value
  const myphone03 = document.getElementById("PhoneNumber03").value
  const myphone = myphone01 + myphone02 + myphone03
  
  await axios.post('http://localhost:3000/tokens/phone',{phone:myphone})

}


// 회원 가입 API 요청
const submitSignup = async () => {
  console.log('회원 가입 이메일 전송')
  const myphone01 = document.getElementById("PhoneNumber01").value
  const myphone02 = document.getElementById("PhoneNumber02").value
  const myphone03 = document.getElementById("PhoneNumber03").value
  const myphone = myphone01 + myphone02 + myphone03
  const jName = document.getElementById("SignupName").value
  const jPeopleNumber = document.getElementById("SignupPersonal").value
  const jFavoriteSite = document.getElementById("SignupPrefer").value
  const jPassword = document.getElementById("SignupPwd").value
  const jEmail = document.getElementById("SignupEmail").value
  const user = {myphone,jName,jPeopleNumber,jFavoriteSite,jPassword,jEmail}

  await axios.post('http://localhost:3000/users',{user})
}
