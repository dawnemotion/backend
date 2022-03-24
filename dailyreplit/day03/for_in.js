// 객체를 순회하며 key가 title이거나
// name일 경우 value를 대문자로 바꿔주세요.

const obj = {
  title: 'The Title',
  name: 'Jane',
  contents: 'Nothing to say'
};

for (let key in obj) {
  if (key === 'title' || key === 'name'){
// 	obj[key].toUpperCase()
// 	이것은 단순히 대문자로만 변경을 해주는 것일뿐 obj의 값을 변경하진 않는다.
//  obj[key]를 이용해 대문자로 변경된 obj[key]의 값을 다시 재할당해줘야한다.
  	obj[key] = obj[key].toUpperCase()
  }
}

console.log(obj);
// {
//   title : "THE TITLE",
//   name : "JANE",
//   contents: "Nothing to say"
// }
