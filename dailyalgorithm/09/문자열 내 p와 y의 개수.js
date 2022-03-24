const solution = (s) => {
    //     내가 생각하는 로직 문자열을 전부 대문자 혹은 소문자로 변경후에
    //     문자열을 순회하면서 p와 y의 갯수를 파악하고
    //     변수 2개에 p와 y의 갯수를 담아주고 
    //     그 값이 같다면 return true 다르면 return false
        s = s.toLowerCase()
        let p = 0;
        let y = 0;
        
        for(let i = 0; i < s.length; i++){
            if(s[i] === "p"){
                p++
            }else if(s[i] === "y"){
                y++
            }
        }
        return p === y
    }
solution("PPPYYY")

function solution(s){
    const check = {};
    
//     전체 문자열을 소문자로 변경
    s.toLowerCase()
     .split("")
     .forEach( str => {
        check[ str ] === undefined
//         객체에 할당되어 있는 키 데이터가 없다면
        ? check [ str ] = 1
//         객체에 할당되어 있는 키 데이터가 있다면
        : check [ str ]++;
    })
    return check.p === check.y;
}

solution("PPPYYY")
