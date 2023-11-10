function generateRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generateExpression() {
    var result = '';
    var characters = '123456789';
    var tmp = characters.charAt(Math.floor(Math.random() * 9));
    CaptchaSum = 0;
    CaptchaSum += Number(tmp);
    result += tmp;
    result += '+';
    tmp = characters.charAt(Math.floor(Math.random() * 9));
    result += tmp;
    CaptchaSum += Number(tmp);

    return result;
}

var textCaptha = document.getElementById('captcha');
textCaptha.innerText = generateRandomString(5);
var CaptchaSum = 0;
var FormCounter = 0;



sub.onclick = function() {
    var resCaptcha = document.getElementById('capt');
    if (resCaptcha.value == textCaptha.innerText && FormCounter == 0) {
        let submit = document.getElementById('form');
        submit.onsubmit = 'return true';
    } else if(CaptchaSum == Number(resCaptcha.value) && FormCounter == 1) {
        let submit = document.getElementById('form');
        submit.onsubmit = 'return true';
    }
    else if(FormCounter == 0){
        FormCounter++;
        textCaptha.innerText = generateExpression();
    } else{
        alert("Error!");
        FormCounter++;
    }
}