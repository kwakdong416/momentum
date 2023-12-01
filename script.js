const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "active sexy-font";
  /*
   <h1> 태그가 처음부터 가지고 있는 sexy-font를 보존시키기 위해 추가해줬다
   사실 이 방법은 그리 좋은 방법은 아니다. sexy-font를 건드리지 않으면서 
   active를 추가하는 방법이 필요하다. 이는 다음 강의에서 배운다.
   */
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
  console.log(h1.className);
}
/* 
styles.css에서 active 클래스에 대한 스타일을 설정했다. 
굳이 clickedClass = "active";를 적어주는 이유는
실수를 방지하기 위함이다. 

잘못된 javascript 변수명을 사용하면 javascript가 알려줘서 
실수를 방지할 수 있다. active를 한번만 복사하면 
되는 것과 여러번 복사하면 되는 것은 실수 빈도 발생 숫자가 확 다르다.
*/

h1.addEventListener("click", handleTitleClick);
