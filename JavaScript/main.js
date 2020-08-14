var div_list = document.getElementsByTagName("div")
for(var i = 0 ; i < div_list.length; i++){
    var red = Math.floor(Math.random() * 256);  // 0 ~ 255
    var green = Math.floor(Math.random() * 256);  // 0 ~ 255
    var blue = Math.floor(Math.random() * 256);  // 0 ~ 255

  
    // background-color
    // backgroundColor 카멜케이스로 바꿔 사용
    // 백틱( ` : 숫자키 1번 왼쪽에 있는 문자 )
    // 백틱 ES2015이상에서만 사용가능한 연산자
    var s = "rgb(" + red + "," + green + "," + blue + ")"
    var color_string = `rgb( ${red} , ${green} , ${blue} )`
    div_list[i].style.backgroundColor = `rgb( ${red} , ${green} , ${blue} )`
    div_list[i].innerHTML = color_string 

}