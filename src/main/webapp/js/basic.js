// javascript 주석입니다.
/*
  - 자바스크립트 문법적용
     : 대소문자 완벽히 구분한다.
     : 한문장은 ; 끝난다. 단 줄을 바꾸면 ;과 동일하게 본다. 권장은 ;을 한다.
 */

// 브라우저(화면)에 출력
document.write("난 언제 출력되니??");
document.write("<h1 style='color:red'>자바스크립트</h1> 기대된다.");

function test(th) { // th는 this 전달
   // alert("test 함수 호출됨!!!");
   th.style.border = "double red 10px";
   th.style.color = "blue";
}

function test2(th) {
   th.style.border="double gray 30px";
   th.style.color="pink";
}