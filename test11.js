//x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
    var row = [x, n];
    var answer = [];
    for (let i = 0; i < n; i++) {
        answer.push(x+x*i);
    }
    return answer;
}