// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  const myphone01 = document.getElementById("PhoneNumber01").value
  const myphone02 = document.getElementById("PhoneNumber02").value
  const myphone03 = document.getElementById("PhoneNumber03").value
  const myphone = myphone01 + myphone02 + myphone03
  
  await axios.post('http://localhost:3000/tokens/phone',{phone:myphone})
  console.log('인증 번호 전송')
}

// 핸드폰 인증 완료 API 요청
const submitToken = async () => {
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  const token = document.getElementById("TokenInput").value
  const phone01 = document.getElementById("PhoneNumber01").value
  const phone02 = document.getElementById("PhoneNumber02").value
  const phone03 = document.getElementById("PhoneNumber03").value
  const phone = phone01 + phone02 + phone03
  await axios.patch('http://localhost:3000/tokens/phone',{phone:phone,token:token})
  console.log('핸드폰 인증 완료')
}

// 회원 가입 API 요청
const submitSignup = async () => {
  const phone01 = document.getElementById("PhoneNumber01").value
  const phone02 = document.getElementById("PhoneNumber02").value
  const phone03 = document.getElementById("PhoneNumber03").value
  const phone = phone01 + phone02 + phone03
  const name = document.getElementById("SignupName").value
  const personal = document.getElementById("SignupPersonal1").value+"-"+document.getElementById("SignupPersonal2").value
  const prefer = document.getElementById("SignupPrefer").value
  const pwd = document.getElementById("SignupPwd").value
  const email = document.getElementById("SignupEmail").value
  

  await axios.post('http://localhost:3000/user',{phone:phone,name:name,personal:personal,prefer:prefer,pwd:pwd,email:email})
  console.log('회원 가입 이메일 전송')
}
