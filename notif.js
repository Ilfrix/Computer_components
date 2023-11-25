var elem = document.getElementsByClassName('dropdown-content')[0];
var text = document.getElementsByClassName('image__button')[0];
var start_value = 0;
var count = 0;

function create_notif(){
  new_notif = document.createElement('a');
  new_notif.innerText = `Уведомление ${++start_value}`;
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