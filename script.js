const btnEl = document.getElementById("btn");
const inputEl = document.getElementById("input");
const copyEl = document.getElementById("copy");
const alertEl = document.getElementById("alert-container");

btnEl.addEventListener("click", () => {
    createPassWord();
})

copyEl.addEventListener("click", () => {
    copyPassWord();
    if(inputEl.value) {
        alertEl.classList.remove("active");
    setTimeout(() => {
        alertEl.classList.add("active");
    }, 2000);
    }
    
})

function createPassWord() {
    const characters = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const length = 14;
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * characters.length);
        password += characters[randomNumber];
    }
    inputEl.value = password;
}

function copyPassWord() {
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
}