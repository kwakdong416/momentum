const calcaulator = {
  plus: function (a, b) {
    alert(a + b);
  },
  minus: function (a, b) {
    alert(a - b);
  },
  divide: function (a, b) {
    alert(a / b);
  },
  times: function (a, b) {
    alert(a * b);
  },
  square: function (a, b) {
    alert(a ** b);
  },
};

console.log(calcaulator.plus(2, 3));
/*
이 코드를 실행하면 alert에 의해 5 알림창이 뜨지만 적장 실제 plus 값은 undefined이다.
*/

const age = 96;

function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

/*
function을 사용할 때는 return을 적어줘야지만 변수내 값까지 변경시킬 수 있다.

앞으로는 console에 출력하려고 function을  사용하지 않고 어떤 작업을 처리하고
그 결과를 return하기 위해 function을 사용할 것이다.


console에 값을 보여주는 것과 그 variable 내 값을 변경하는 것은 엄연히 다른 것이다.
*/

const calcaulator2 = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  times: function (a, b) {
    return a * b;
  },
  square: function (a, b) {
    return a ** b;
  },
};

const plusResult = calcaulator2.plus(5, 2);
const minusResult = calcaulator2.minus(plusResult, 10);
const timesResult = calcaulator2.times(10, minusResult);
const divideResult = calcaulator2.divide(minusResult, plusResult);
const squreResult = calcaulator2.square(divideResult, minusResult);

console.log(plusResult);

/*
function 내에서 console을 사용하지 않는 것은 외부에서 값을 투입하고  이를 
return으로 돌려받는 것이 프로그램이 복잡해질 수록 개발 편이성이 훨씬 높기 때문이다.

위 코드를 보면 서로가 서로를 의존하고 있다. 이는 코드의 흐름을 이해하는 데 매우 좋은 방법이다.

브라우저 콘솔에 가서 각 변수명을 쳐보면 각 변수내에 있는 값을 볼 수 있다.
*/
