/*
    이벤트 등록 방법2. 

        HTML 요소 선택 후 onclick = function(){} 작성해 click 이벤트 등록 방법
*/
document.querySelector("button").onclick = function(){

    // <body></body> 요소의 배경을 녹색으로 설정
    document.body.style.backgroundColor = "green";

}