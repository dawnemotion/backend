import axios from "axios";

// 비동기방식
function fetchPost() {
    const result = axios.get('http://koreanjson.com/posts/1')
    console.log("=========")
    console.log(result) // Promise { <pending(기다리는중 뜻)>}
    console.log("=========")
}

// 실행명령
fetchPost()


// 동기방식
async function fetchPost2() {
    const result = await axios.get('http://koreanjson.com/posts/1')
    console.log("=========")
    console.log(result)
    console.log(result.data.title)
    console.log("=========")
}

fetchPost2()