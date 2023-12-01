var elem = document.getElementsByClassName('dropdown-content')[0];
var text = document.getElementsByClassName('image__button')[0];
var start_value = 0;
var count = 0;

function create_notif(){
  new_notif = document.createElement('div');
  new_notif.id = `div ${start_value}`;
  new_notif.style.height = 40 + 'px';
  new_notif.style.width = 170 + 'px';
  mes = document.createElement('a');
  but = document.createElement('button');
  
  but.style.position = 'absolute';
  but.style.height = 20 + 'px';
  but.style.width = 20 + 'px';
  but.style.left = (new_notif.style.width.slice(0, -2) - but.style.width.slice(0, -2)) + 'px';
  but.id = start_value;

  but.textContent = 'X';
  mes.innerText = `Уведомление ${++start_value}`;
  new_notif.append(but);
  new_notif.append(mes);
  elem.append(new_notif);
  text.innerHTML = `<strong>${start_value}</strong>`;
}

function delayDecorator(func, delay) {
  let timeoutId;
  clearTimeout(timeoutId);
  return function() {
    timeoutId = setTimeout(func, delay);
  }
}

const delayedCreateNotif = delayDecorator(create_notif, 100);
note = setInterval(delayedCreateNotif, 3000);

document.getElementsByClassName('image__button')[0].addEventListener('click', function() {
  clearInterval(note);
  if (count % 2 == 0)
    note = setInterval(delayedCreateNotif, 10000);
  else
    note = setInterval(delayedCreateNotif, 3000);
  count++; 
});

function showNotification(){
  notification = document.createElement('div');
  notification.className = "notification";
  notification.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообещение";
  document.body.append(notification);
  setTimeout (() => notification.remove(), 5500);
}
showNotification();

var bell = document.getElementsByClassName('dropdown-content')[0];
bell.addEventListener('click', function(event){
  if (event.target != undefined && event.target.localName == 'button'){
    let delet = document.getElementById(`div ${event.target.id}`);
    delet.remove();
    --start_value;
    text.innerHTML = `<strong>${start_value}</strong>`
  }
});