const playerName = "nico";
const playerPoints = 100;
const playerHnadome = false;
const playerFat = "little bit";

/*
이렇게 사용하는 것은 너무 비효율적이다.
*/

const player = {
  name: "nico",
  points: 100,
  Handsome: false,
  Fat: true,
};

console.log(player);
console.log(player.name);
console.log(player["name"]); // 둘 다 똑같은 결과물을 보여준다.
console.log(player.Fat);
player.Fat = false;
console.log(player.Fat);
player.lastName = "KIM";
player.points = player.points + 15;
console.log(player);

/*
object(객체)를 사용하는 것이 훨씬 깔끔하다.
xxx.xx 가 바로 object를 사용하는 방법이다.
xxx가 object이고 xx가 entity(개체)이다.

player.Fat은 player object 내의 entity를 수정하는
것이기 때문에 오류가 발생하지 않는다. 
player = fasle; 처럼 object를 직접 건드려야만 오류가 발생한다.

object를 선언할 때 존재하지 않았던 entity도 이후 추가할 수 있다.
*/

/* 
설명이 필요하지 않은 데이터 리스트들은 array로,
 설명이 필요한 정보가 담긴 데이터 리스트들은 object로!
 */
