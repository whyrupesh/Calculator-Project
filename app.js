function addition(a,b){
    return a+b;
}

function subtract(a,b){
    return (a-b);
}

function multiply(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}
//alert("hellow");
let output = document.querySelector("#output-box h2");
let zero = document.querySelector("#zero");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
var division = document.querySelector("#division");
var multiply = document.querySelector("#multiply");
var addition = document.querySelector("#addition");
var subtract = document.querySelector("#subtract");
var equals = document.querySelector("#equals");
var clear = document.querySelector("#clear");
var backspace = document.querySelector("#backspace");
var string = "";


zero.addEventListener("click",function(){
    string = string +"0";
    output.textContent=string;  
})
one.addEventListener("click",function(){
    string = string +"1";
    output.textContent=string;   
})
two.addEventListener("click",function(){
    string = string +"2";
    output.textContent=string;    
})
three.addEventListener("click",function(){
    string = string +"3";
    output.textContent=string;    
})
four.addEventListener("click",function(){
    string = string +"4";
    output.textContent=string;    
})
five.addEventListener("click",function(){
    string = string +"5";
    output.textContent=string;    
})
six.addEventListener("click",function(){
    string = string +"6";
    output.textContent=string;  
})
seven.addEventListener("click",function(){
    string = string +"7";
    output.textContent=string;  
})
eight.addEventListener("click",function(){
    string = string +"8";
    output.textContent=string;    
})
nine.addEventListener("click",function(){
    string = string +"9";
    output.textContent=string;    
})
division.addEventListener("click",function(){
    string = string +"/";
    output.textContent=string;    
})
multiply.addEventListener("click",function(){
    string = string +"*";
    output.textContent=string;    
})
addition.addEventListener("click",function(){
    string = string +"+";
    output.textContent=string;    
})
subtract.addEventListener("click",function(){
    string = string +"-";
    output.textContent=string;    
})
clear.addEventListener("click",function(){
    string = "";
    output.textContent=string;    
})
backspace.addEventListener("click",function(){
    string = string.trim;
    output.textContent=string;    
})

