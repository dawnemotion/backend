import axios from "axios"
import  cheerio  from "cheerio"

async function createBoardApi(mydata){

    // 3. 게시글에서 URL 찾아서 스크래핑하기
    const targetURL = mydata.content.split(" ").filter((el)=> el.startsWith("http"))[0]

    // axios.get사용시 end point 설정
    // 1.스크래핑하기
    const aaa = await axios.get(targetURL)

    // 2.og 골라내기
    const $ = cheerio.load(aaa.data)
    $("meta").each((_, el) => {
        if($(el).attr('property')){
            const key = $(el).attr('property').split(":")[1]
            const value = $(el).attr('content')
            console.log(key, value)
        }
    })
}

const frontendData = {
    title:"안녕하세요",
    content:"여기 정말 좋은 것 같아요 한번 또 놀러오세요 여기가 어디냐면 https://naver.com 이에요!!"
}

createBoardApi(frontendData)

// getOpenGraph()함수 생성
// axios, cheerio 모듈방식으로 설정
// aaa 변수에 axios.get으로 엔드포인트 설정해서 정보가져오기
// 비동기처리를 위해 async await를 작성해주고
// console.log(aaa)해보면 문자열로 감싸진것이 나오는데 aaa.data로 설정하면 알맹이만나온다.
// cheerio.load(aaa.data)로 정보를 가져오고 이것을 변수에 담으면 특정 태그이름으로 정보를 가져올 수 있다.
// .each를 이용하면 foreach로 작동한다. .each는 자바스크립트 함수가 아니다.
// .each 화살표 함수로 각각 실행시킬수 있다.
// _은 몇개?여러개 , el은 엘리먼트,요소
// qqq변수명에 담긴 속성 el에서 attr:속성 어트리뷰트('특정이름')
// qqq(el).attr('property') === 조건을 찾아가면 og:title이다.
// qqq(el).attr('property').split(":")를 하게되면 og와 title이 나뉘어진다.['og','title']
// qqq(el).attr('property').split(":")[1] === title:키를 가지고온다.
// title을 키로주고 content를 벨류로 준다.
// qqq(el).attr('content') 이번엔 content를 가지고와서 value로 지정해준다.
// 메타태그에 property속성을 가진 정보만 가지고 와야되서 if를 걸어준다. og한정
// 프론트엔드에서 글을썻다고 가정하고 데이터가 보내오면 그것을 og를 뽑아내서 db에 저장해야한다.
// 인자로 실행함수에 넣어주고 함수식 부분에 매개변수를 mydata를 받아온다.
// http://naver.com를 어떻게찾아야하나??
// mydata.content에서 공백을 기준으로 split을 해주고 배열을 만든다.
// 만든 배열에서 filter 이용해 startsWith("http")를 해주면 해당조건을 가진 인덱스 0의 배열이 만들어진다.
// targetURL로 변수명을 지어주고 기존의 aaa에 naver.com대신 targetURL을 넣는다.