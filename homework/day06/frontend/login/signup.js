const getValidationNumber = async () => {
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  const myphone01 = document.getElementById("PhoneNumber01").value
  const myphone02 = document.getElementById("PhoneNumber02").value
  const myphone03 = document.getElementById("PhoneNumber03").value
  const myphone = myphone01 + myphone02 + myphone03
  
  axios.post('http://localhost:3000/tokens/phone',{phone:myphone})
  
  await console.log('인증 번호 전송')
}


// 회원 가입 API 요청
const submitSignup = async () => {
  jName = document.getElementById("SignupName").innerText
  jPeopleNumber =
  jPhoneNumber =
  jFavoriteSite = 
  jPassword =
  jEmail = 

  

  axos.post('http://localhost:3000/users',{})

  await console.log('회원 가입 이메일 전송')
}
