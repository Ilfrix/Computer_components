var things = document.getElementById('things');


tmp = prompt("Введите элемент списка", "");
while (tmp != null && tmp != ""){
  console.log("sadfg");
  let li = document.createElement("li");
  li.textContent = tmp;
  things.append(li);
  tmp = prompt("Введите элемент списка", "");
}