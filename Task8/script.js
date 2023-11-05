"use strict";

var result = prompt("Желаете пройти регистрацию на сайте?");

if (result == "Да") {
    alert("Круто!");
} else{
    alert("Попробуй еще раз");
}

var admin = prompt("Введите логин");
if (admin == "Админ"){
    var password = prompt("Введите пароль");
    if (password == "Я главный")
        alert("Здравствуйте!");
    else if(password == "" || password == null)
        alert("Отменено");
    else 
        alert("Неверный пароль");
} else if(admin == "" || admin == null)
    alert("Отменено");
else
    alert("Я вас не знаю");

function icon_click(){
    if (document.getElementsByClassName('like_icon')[0].style.backgroundColor == 'white'){
        document.getElementsByClassName('icon_wrap')[0].style.backgroundColor = "pink";
        document.getElementsByClassName('like_icon')[0].style.backgroundColor = "red";
    }
    else{
        document.getElementsByClassName('icon_wrap')[0].style.backgroundColor = "white";
        document.getElementsByClassName('like_icon')[0].style.backgroundColor = 'white';
    }
}
