const age = prompt("How old are you?");

console.log(typeof "15", typeof parseInt("15"));
console.log(age, parseInt(age));

/*
prompt()는 사용자에게 창을 띄울 수 있도록 해주는 function이다.
string을 출력한 후 string을 입력받을 수 있다. 숫자를 입력해도 string이 된다.

parsInt는 string을 number로 바꿔주는 function이다. parseInt()가 적용된prompt()에 
숫자가 아닌 다른 걸 입력하면 NaN이 뜬다.

console.log(age);가 아직 작동하지 않은 채로 javscript는 우리를 기다리고 있다.
prompt는 요즘 잘 안 쓰이는 function으로 css를 적용시킬 수도 없고 특정 브라우저
에서는 아예 실행이 되지 않는다.

요즘에는 html , css로 만든 각자만의 창을 사용한다.

condition은 조건문을 의미한다. true와 false에 따라 조건문을 실행한다.
*/

const age2 = parseInt(prompt("How old are you?"));
console.log(age2);

/*
funcion은 안에서부터 밖으로 실행된다.
위 코드를 실행하면 NaN이 뜬다.
*/
