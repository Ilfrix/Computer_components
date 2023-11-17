var basket_value = document.getElementById('basket_value');
var basket_list = document.getElementById("basket_list");
var basket_down = document.getElementById("basket_down");
var basket_up = document.getElementById("basket_up");


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

var t = [3, 4, 7, 8, 9, 4, 3, 56, 7, 8, 9, 8, 76, 54, 3, 2, 1, 45, 6, 7, 8];

function sort_slice(arr, start, end){
    result = new Array();
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] >= start && arr[i] <= end) {
            result.push(arr[i]);
        }
    }
    return result;
}

function sort(){
    console.log("start");
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i].value > arr[j].value) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    ul = document.getElementById("basket_list");
    ul.innerHTML = "";
    for (let i = 0; i < arr.length; ++i){
        let li = document.createElement("li");
        li.id = `li ${i}`;
        li.innerHTML = arr[i].value;
        let bt_li = document.createElement("button");
        bt_li.id = `bt_li ${i}`;
        bt_li.innerHTML = '+';
        basket_list.append(li);
        li.append(bt_li);
    }
    console.log(arr);
    return arr;
}
basket_up.addEventListener('click', sort);
// basket_down.click(sort(arr));
// basket_down.addEventListener('click', sort(arr));
// console.log(sort_slice(t, 2, 7));