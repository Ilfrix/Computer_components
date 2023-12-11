var section = document.getElementById('card_sec');
var main = document.getElementById('main');

var tmp = document.getElementById('title');

main.onclick = function(event){
  // let section = event.target;
  let id_name = '#'+event.target.id;
  let num = id_name.slice(-1);
  console.log(id_name);
  let card = main.querySelector(id_name);
  card.style.left = 0;
  card.style.transform = "translateX(0%)";
  let text_name = "#text" + num;
  console.log("text name" + text_name);
  let title = main.querySelector(text_name);
  title.style.display = 'block';
  let text = main.querySelector(text_name).nextElementSibling;
  text.style.display = 'block';
};