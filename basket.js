var basket_value = document.getElementById('basket_value');
var basket_list = document.getElementById("basket_list")


function Accumulator(stringValue){
    this.value = stringValue,
    this.read = function() {
        tmp = prompt("Введите ЧИСЛО");
        this.value = Number(this.value) + Number(tmp);
    }
}

var arr = new Array();
var count_li = 0;
var last_product = new Array();


basket_add.onclick = function() {
    let temp = new Accumulator(0);
    temp.read();
    basket_value.innerText = Number(basket_value.innerHTML) + Number(temp.value);
    let li = document.createElement("li");
    li.id = `li ${count_li}`;
    li.innerHTML = temp.value;
    let bt_li = document.createElement("button");
    bt_li.id = `bt_li ${count_li}`;
    bt_li.innerHTML = '+';
    last_product.push(temp.value);
    bt_li.onclick = function (){
        cur_sum = document.getElementById(`li ${bt_li.id.substring(6)}`);
        let value = Number(cur_sum.innerText.substring(0, cur_sum.innerText.length - 1))
        basket_value.innerHTML = Number(basket_value.innerHTML) + value;
        last_product[Number(bt_li.id.substring(6))] += value;
    }
    ++count_li;
    

    basket_list.append(li);
    li.append(bt_li);
    arr.push(temp);
}
basket.onclick = function() {
    let elem = document.getElementById(`li ${--count_li}`)
    basket_value.innerHTML = Number(basket_value.innerHTML) - last_product[last_product.length - 1];
    last_product.pop();
    elem.remove();
    arr.pop();
    console.log(arr);
}