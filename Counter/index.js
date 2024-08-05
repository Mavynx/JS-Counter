const decBtn = document.getElementById("decBtn");
const resBtn = document.getElementById("resBtn");
const incBtn = document.getElementById("incBtn");
const myLabel = document.getElementById("myLabel");

decBtn.onclick = function(){
    count--;
    myLabel.textContent = count;
}

resBtn.onclick = function(){
    count = 0;
    myLabel.textContent = count;
}

incBtn.onclick = function(){
    count++;
    myLabel.textContent = count;
}

let count = 0;
