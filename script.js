const display = document.getElementById("display"); // ! dowiedz sie o co chodzi z const i tym całym document.get element.....

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
        alert('Please use the calculator CORRECTLY!');
    }
}