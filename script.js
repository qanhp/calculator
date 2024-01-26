// 4 variablen zum rechnen -> 2 rechenelemente und 1 lösungselement; 1 rechenzeichen

let el1 = "";
let b1 = false;
let el2 = "";
let b2 = false;
let lösungselement;
let rechenzeichen = "";

// buttons
let buttons = document.querySelectorAll(".buttons");




// anzeige
let lösungsweg = document.querySelector(".lösungsweg");
let lösung = document.querySelector(".lösung");

window.onload = function() {
    lösungsweg.textContent="0";
    lösung.textContent="0";
}
    
lösung.textContent=lösungselement;
lösungsweg.textContent=el1 +" "+ rechenzeichen +" "+ el2;

//// Funktionen
// number buttons
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
let decimal = document.querySelector("#decimal");

let number = "";
one.addEventListener("click", function() {
    number += "1";
    update(number);
})
two.addEventListener("click", function() {
    number += "2";
    update(number);
})
three.addEventListener("click", function() {
    number += "3";
    update(number);
})
four.addEventListener("click", function() {
    number += "4";
    update(number);
})
five.addEventListener("click", function() {
    number += "5";
    update(number);
})
six.addEventListener("click", function() {
    number += "6";
    update(number);
})
seven.addEventListener("click", function() {
    number += "7";
    update(number);
})
eight.addEventListener("click", function() {
    number += "8";
    update(number);
})
nine.addEventListener("click", function() {
    number += "9";
    update(number);
})
zero.addEventListener("click", function() {
    number += "0";
    update(number);
})
// decimal.addEventListener("click", function () {
//     number += ".";
//     update(number);
// })

// rechen buttons
let addButton = document.querySelector("#add");
let substractButton = document.querySelector("#substract");
let multiplyButton = document.querySelector("#multiply");
let divideButton = document.querySelector("#divide");
let equalButton = document.querySelector("#equal");

addButton.addEventListener("click", function() {
    rechenzeichen = "+";
    b1 = true;
    lösungsweg.textContent = el1 + " " + rechenzeichen + " " + el2;
    number = "";
    if (el1!="" && el2!="") {
        lösungselement = add(parseFloat(el1),parseFloat(el2)); 
        lösungsweg.textContent = el1 + " " + rechenzeichen + " " + el2;
        lösung.textContent = lösungselement;
        el1 = lösungselement;
        el2 = "";
    }

})

substractButton.addEventListener("click", function() {
    rechenzeichen = "-";
    b1 = true;
    lösungsweg.textContent = el1 + " " + rechenzeichen + " " + el2;
    number = "";
    if (el1!="" && el2!="") {
        lösungselement = substract(parseFloat(el1),parseFloat(el2)); 
        lösungsweg.textContent = el1 + " " + rechenzeichen + " " + el2;
        lösung.textContent = lösungselement;
        el1 = lösungselement;
        el2 = "";
    }
})

multiplyButton.addEventListener("click", function() {
    rechenzeichen = "x";
    b1 = true;
    lösungsweg.textContent = el1 + " " + rechenzeichen + " " + el2;
    number = "";
    if (el1!="" && el2!="") {
        lösungselement = multiply(parseFloat(el1),parseFloat(el2)); 
        lösungsweg.textContent = el1 + " " + rechenzeichen + " " + el2;
        lösung.textContent = lösungselement;
        el1 = lösungselement;
        el2 = "";
    }
})

divideButton.addEventListener("click", function() {
    rechenzeichen = "÷";
    b1 = true;
    lösungsweg.textContent = el1 + " " + rechenzeichen + " " + el2;
    number = "";
    if (el1!="" && el2!="") {
        lösungselement = divide(parseFloat(el1),parseFloat(el2)); 
        lösungsweg.textContent = el1 + " " + rechenzeichen + " " + el2;
        lösung.textContent = lösungselement;
        el1 = lösungselement;
        el2 = "";
    }
})

equalButton.addEventListener("click", function() {
    if (el1 != "" && el2 != "") {
        if (rechenzeichen === "+") {
            lösungselement = add(parseFloat(el1),parseFloat(el2)); 
            lösungsweg.textContent = el1 + " " + rechenzeichen + " " + el2;
            lösung.textContent = lösungselement;
            el1 = lösungselement;
            el2 = "";
        }
        if (rechenzeichen === "-") {
            lösungselement = substract(parseFloat(el1),parseFloat(el2));
            lösungsweg.textContent = el1 + " " + rechenzeichen + " " + el2;
            lösung.textContent = lösungselement;
            el1 = lösungselement; 
            el2 = "";
        }
        if (rechenzeichen == "x") {
            lösungselement = multiply(parseFloat(el1),parseFloat(el2)); 
            lösungsweg.textContent = el1 + " " + rechenzeichen + " " + el2;
            lösung.textContent = lösungselement;
            el1 = lösungselement;
            el2 = "";
        }
        if (rechenzeichen == "÷") {
            lösungselement = divide(parseFloat(el1),parseFloat(el2));
            lösungsweg.textContent = el1 + " " + rechenzeichen + " " + el2;
            lösung.textContent = lösungselement;
            el1 = lösungselement; 
            el2 = "";
        }
    }
})

//
const clickNumber = function() {

}

//rechnen
const add = function(x,y) {
    return x+y;
}
const substract = function(x,y) {
    return x-y;
}
const multiply = function(x,y) {
    return x*y;
}
const divide = function(x,y) {
    return x/y;
}

//
const update = function(number) {
    if (b1==false) {
        el1 = parseInt(number)
        lösung.textContent = el1;
        lösungsweg.textContent = el1 + " " + rechenzeichen + " " + el2;
    } else {
        el2 = parseInt(number);
        lösung.textContent = el2;
        lösungsweg.textContent = el1 + " " + rechenzeichen + " " + el2;
    }
    
    
    // lösungsweg.textContent = el1;
    
}