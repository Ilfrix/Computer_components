function truncate(str, maxlength){
    if(str.length > maxlength) {
        str = str.substring(0, maxlength - 3);
        str += "...";
    }
    return str;
}

var TextGlass = document.getElementById('text');
TextGlass.innerText = truncate(TextGlass.innerText, 10);