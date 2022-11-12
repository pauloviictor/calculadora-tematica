let elementeHtml = document.querySelector("html");
let elementFieldset = document.querySelector("fieldset");
let elementSelectTheme = document.querySelector("#selectedTheme")
const mainScreenElement = document.querySelector('#main-screen');
const operationsScreenElement = document.querySelector('#operations');
let theme = document.querySelector('#themes');
let lastTheme = "yellow";


function themeChanger(value){
    elementFieldset.className = value;
    elementSelectTheme.className = value;
    if(value === "dark"){
        elementeHtml.style.backgroundColor = "#1C1A1C";
    } else {
        elementeHtml.style.backgroundColor = "whitesmoke";
    }

    selectTheme();
    
}

function selectTheme(){
    if(theme.style.display == "none"){
        theme.style.display = "block"
        elementSelectTheme.style.display = "none"
    } else {
        theme.style.display = 'none'
        elementSelectTheme.style.display = "flex"
    }
}

function valueSelected(value) {
    if (operationsScreenElement.value !== '' && operationsScreenElement.value == mainScreenElement.value && !isNaN(value)) {
        operationsScreenElement.value = ""
    }

    operationsScreenElement.value += value;

}

function percent() {
    let lastValue = operationsScreenElement.value;
    lastValue = lastValue / 100;
    operationsScreenElement.value = lastValue;
}

function operation() {
    mainScreenElement.value = eval(operationsScreenElement.value)
    operationsScreenElement.value = eval(operationsScreenElement.value);
}

function clean() {
    operationsScreenElement.value = ""
    mainScreenElement.value = ""
}

function changeSignal() {
    operationsScreenElement.value = (operationsScreenElement.value * (-1));
}
