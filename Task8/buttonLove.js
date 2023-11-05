const but = document.querySelector(".lovely-button");
const spn = document.querySelector(".b-text");
const spnDefault = Number(spn.innerHTML);
function button() {
    but.classList.toggle("new-color");
    let x = Number(spn.innerHTML);
    if (x - spnDefault > 0){
        x = spnDefault;
        document.body.removeEventListener("mousemove", addImg);
    }
    else {
        x++;
        document.body.addEventListener("mousemove", addImg);
    }
    spn.innerHTML = x;
}
let d = 0;
function addImg(event) {
    d++;
    if (d == 10 )
    {
        let img = document.createElement("img");
        img.classList.add("new-image");
        img.style.left = event.clientX + -40 + "px";
        img.style.top = event.clientY + 50 + "px";
        img.setAttribute("src", "./images/like-o-svgrepo-com.svg");
        document.body.appendChild(img);
        d = 0;
    }
}