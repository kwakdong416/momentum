const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  /*
  const clickedClass = "active";

  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
  console.log(h1.className);

  h1.classList.contains(clickedClass)는 h1이 clickedClass를 포함하는 지만을 확인한다.
  */
  h1.classList.toggle("active");
  console.log(h1.className);
  /*
   이 한 줄 만으로 위 주석처리 된 전체 코드를 대체할 수 있다.
    한 줄만 쓰면 되기 때문에 위 const 부분까지 주석처리를 하였다.
    여러번 반복해서 사용할 떄 const를 생성하면 된다.
   */
}

h1.addEventListener("click", handleTitleClick);
