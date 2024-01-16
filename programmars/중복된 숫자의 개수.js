// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

// filter를 이용
function solution(array, n) {
  var answer = 0;
  let real_arr = array.filter((item) => item === n);
  answer = real_arr.length;

  return answer;
}

console.log(solution([1, 1, 1, 2, 3, 4, 5], 1));
