var section = document.getElementById('card_sec');
var main = document.getElementById('main');

var tmp = document.getElementById('title');

main.onclick = function(event){
  if (event.target.id.slice(0, -1) == 'card_vid'){
    let id_name = '#'+event.target.id;
    let num = id_name.slice(-1);
    let card = main.querySelector(id_name);
    card.style.left = 0;
    card.style.transform = "translateX(0%)";
    let text_name = "#text" + num;
    let title = main.querySelector(text_name);
    title.style.display = 'block';
    let text = main.querySelector(text_name).nextElementSibling;
    text.style.display = 'block';
  }
  
};

main.ondblclick = function(event){
  if (event.target.id.slice(0, -1) == 'card_vid') {
    let id_name = '#'+event.target.id;
    let num = id_name.slice(-1);
    let card = main.querySelector(id_name);
    let text_name = "#text" + num;
    let title = main.querySelector(text_name);
    title.style.display = 'none';
    let text = main.querySelector(text_name).nextElementSibling;
    text.style.display = 'none';
    card.style.left = "50%";
    card.style.transform = "translateX(-50%)";
  }
}