let qty1 = document.getElementById("qut1");
let pri1 = document.getElementById("pr1");

qty1.addEventListener("change", function(){
    let selectedOption = qty1.value;

    if(selectedOption === "1"){
        pri1.value = '₹80';
    }else if(selectedOption ==="2") {
        pri1.value = '₹160';
    }
    else if(selectedOption ==="3"){
        pri1.value='₹240';
    }else{
        pri1.value='';
    }
});

let qty2 = document.getElementById("qut2");
let pri2 = document.getElementById("pr2");

qty2.addEventListener("change", function(){
    let selectedOption = qty2.value;

    if(selectedOption === "1"){
        pri2.value = '₹12';
    }else if(selectedOption==="2") {
        pri2.value = '₹24';
    }
    else if(selectedOption ==="3"){
        pri2.value='₹36';
    }else{
        pri2.value='';
    }
});


let qty3 = document.getElementById("qut3");
let pri3 = document.getElementById("pr3");

qty3.addEventListener("change", function(){
    let selectedOption = qty3.value;

    if(selectedOption === "1"){
        pri3.value = '₹25';
    }else if(selectedOption ==="2") {
        pri3.value = '₹50';
    }
    else if(selectedOption ==="3"){
        pri3.value='₹75';
    }else{
        pri3.value='';
    }
});

let qty4 = document.getElementById("qut4");
let pri4 = document.getElementById("pr4");

qty4.addEventListener("change", function(){
    let selectedOption = qty4.value;

    if(selectedOption === "1"){
        pri4.value = '₹30';
    }else if(selectedOption === "2") {
        pri4.value = '₹60';
    }
    else if(selectedOption === "3"){
        pri4.value='₹90';
    }else{
        pri4.value='';
    }
});


let qty5 = document.getElementById("qut5");
let pri5 = document.getElementById("pr5");

qty5.addEventListener("change", function(){
    let selectedOption = qty5.value;

    if(selectedOption === "250gm"){
        pri5.value = '₹25';
    }else if(selectedOption ==="500gm") {
        pri5.value = '₹50';
    }
    else if(selectedOption ==="1000gm"){
        pri5.value='₹100';
    }else{
        pri5.value='';
    }
});


let qty6 = document.getElementById("qut6");
let pri6 = document.getElementById("pr6");

qty6.addEventListener("change", function(){
    let selectedOption = qty6.value;

    if(selectedOption === "1"){
        pri6.value = '₹120';
    }else if(selectedOption ==="2") {
        pri6.value = '₹240';
    }
    else if(selectedOption ==="3"){
        pri6.value='₹360';
    }else{
        pri6.value='';
    }
});







