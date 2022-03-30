// https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(num){
    let answer = 0;
    
//     새로운 배열 생성, 안의 내용은 1로 다 채운다
    const countReduce = new Array( 500 ).fill(1)
                                        .reduce( (acc,cur) => {
                                            if( acc !== 1){

                                            answer ++;
                                            return acc % 2 === 0 
                                                ? acc / 2 
                                                : acc * 3 +1 
                                            }else{
                                                return 1;
                                            }
                                        }, num)
            return countReduce !==1 ? -1 :answer;
}
// dsasdasd
