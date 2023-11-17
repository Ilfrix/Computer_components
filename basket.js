var basket_value = document.getElementById('basket_value');
var basket_list = document.getElementById("basket_list")


function Accumulator(stringValue){
    this.value = stringValue,
    this.read = function() {
        tmp = prompt("Введите ЧИСЛО");
        this.value = Number(this.value) + Number(tmp);
    }
}

var arr = new Array()
var count_li = 0
// var temp = new Accumulator(0);

// function add_cost(value){
//     let elem = document.getElementById(`bt_li ${value}`)
//     basket_value.innerHTML = Number(basket_value.innerHTML) + Number(elem.innerHTML);
// }

basket_add.onclick = function() {
    let temp = new Accumulator(0);
    // alert("new!");
    // tmp = prompt("Введите число");
    // basket.innerText = Number(tmp) + Number(basket.innerText);
    // let temp = new Accumulator(1);
    temp.read();
    basket_value.innerText = Number(basket_value.innerHTML) + Number(temp.value);
    let li = document.createElement("li");
    li.id = `li ${count_li}`;
    li.innerHTML = temp.value;
    let bt_li = document.createElement("button");
    bt_li.id = `bt_li ${count_li}`;
    bt_li.innerHTML = '+';
    // bt_li.onclick = add_cost(count_li);
    ++count_li;
    

    basket_list.append(li);
    li.append(bt_li);
    arr.push(temp);
    console.log(arr);
}
basket.onclick = function() {
    let elem = document.getElementById(`li ${--count_li}`)
    console.log(elem);
    basket_value.innerHTML = Number(basket_value.innerHTML) - Number(elem.innerHTML);
    elem.remove();
    arr.pop();
    console.log(arr);
}