var basket = document.getElementById('basket_value');


function Accumulator(stringValue){
    this.value = stringValue,
    this.read = function() {
        tmp = prompt("Введите ЧИСЛО");
        this.value = Number(this.value) + Number(tmp);
    }
}

basket_add.onclick = function() {
    // tmp = prompt("Введите число");
    // basket.innerText = Number(tmp) + Number(basket.innerText);
    var temp = new Accumulator(0);
    temp.read();
    basket.innerText = temp.value;
}