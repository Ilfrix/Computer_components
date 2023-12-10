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
    createProductElement(temp, count_li);
    ++count_li;
    
    arr.push(temp);
    last_product.push(temp.value);
}

function createProductElement(obj, id){
    let li = document.createElement("li");
    li.id = `li ${id}`;
    li.innerHTML = obj.value;
    let bt_li = document.createElement("button");
    bt_li.id = `bt_li ${id}`;
    bt_li.innerHTML = '+';
    
    bt_li.onclick = function (){
        cur_sum = document.getElementById(`li ${id}`);
        let value = Number(cur_sum.innerText.substring(0, cur_sum.innerText.length - 1))
        basket_value.innerHTML = Number(basket_value.innerHTML) + value;
        last_product[id] += value;
    }

    basket_list.append(li);
    li.append(bt_li);
}
basket.onclick = function() {
    if (count_li >= 1) {
        let elem = document.getElementById(`li ${--count_li}`)
        basket_value.innerHTML = Number(basket_value.innerHTML) - last_product[last_product.length - 1];
        last_product.pop();
        elem.remove();
        arr.pop();
        console.log(arr);
    }
}


function sortProduct(){
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i].value > arr[j].value) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
                tmp = last_product[i];
                last_product[i] = last_product[j];
                last_product[j] = tmp;
            }
        }
    }
}

function sortDown(){
    sortProduct();
    arr.reverse();
    last_product.reverse();
    ul = document.getElementById("basket_list");
    ul.innerHTML = "";
    for (let i = 0; i < arr.length; ++i){
        createProductElement(arr[i], i);
    }
    return arr;
}
function sortUp(){
    sortProduct();
    ul = document.getElementById("basket_list");
    ul.innerHTML = "";
    for (let i = 0; i < arr.length; ++i){
        createProductElement(arr[i], i);
    }
    console.log(arr);
    return arr;
}

basket_up.addEventListener('click', sortUp);
basket_down.addEventListener('click', sortDown);


// Task 14
var list = document.getElementById('list');

list.onmousedown = function(event) {
    event.preventDefault();
    var obj = event.target.closest('img');
    let cost = event.target.closest('li').textContent;
    var new_img = obj.cloneNode(true);
    new_img.style.position = 'absolute';
    new_img.style.left = event.pageX + 'px';
    new_img.style.top = event.pageY + 'px';
    list.appendChild(new_img);
    obj = new_img;
    obj.ondragstart = function() {
        return false;
    };

    let shiftX = event.clientX - obj.getBoundingClientRect().left;
    let shiftY = event.clientY - obj.getBoundingClientRect().top;

    obj.style.position = 'absolute';
    obj.style.zIndex = 1000;
    document.body.append(obj);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        obj.style.left = pageX - shiftX + 'px';
        obj.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);
    obj.onmouseup = function(event) {
    obj.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    obj.hidden = false;

    let dropButton = elemBelow.closest('#store');
    if (!dropButton) {
        document.removeEventListener('mousemove', onMouseMove);
        obj.onmouseup = null;
        obj.remove();
        return false;
    }

    basket_value.innerHTML = Number(basket_value.innerHTML) + Number(cost);
    document.removeEventListener('mousemove', onMouseMove);
    obj.onmouseup = null;
    obj.remove();
    };

};



function rotateObject() {
    var element = document.getElementById('square');
    var currentRotation = 0;

    function rotate() {
        currentRotation += 10;
        element.style.transform = 'rotate(' + currentRotation + 'deg)';
    }
    var interval = setInterval(rotate, 100);
    setTimeout(function() {
        clearInterval(interval);
    }, 100000);
}
rotateObject();

function moveX() {
    var elem = document.getElementById('triangle');
    var currentX = 0;
    var flag = 0;
    function move(){
        if (currentX <= 200 && flag == 0){
            currentX += 10;
        } else if ((currentX > 200 || flag == 1) && currentX >= 30){
            currentX -= 10;
            flag = 1
        } else if(currentX < 30 && flag == 1){
            flag = 0;
        }
        elem.style.left = currentX + 'px';
    }
    var interval = setInterval(move, 100);
    setTimeout(function() {
        clearInterval(interval);
    }, 100000);
}
moveX();