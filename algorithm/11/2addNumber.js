// https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
    const answer = new Set([])
    
    numbers.forEach( (num1, i) => {
        numbers.slice(i+1).forEach( num2 => {
            const sum = num1 + num2
            
            answer.add(sum);
        })
    })  
    return [...answer].sort((a,b) => a-b)
}