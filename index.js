
let saveEl =  document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0;

const increment = () => {
    count += 1;
    countEl.innerHTML = count;
}

let save = () => {
    let countSTR = count + " - ";
    saveEl.textContent += countSTR;
    countEl.innerHTML = 0;
    count = 0;
}
