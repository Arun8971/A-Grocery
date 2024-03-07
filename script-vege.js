let qty1 = document.getElementById("qut1");
let pri1 = document.getElementById("pr1");

qty1.addEventListener("change", function(){
    let selectedOption = qty1.value;

    if(selectedOption === "250gm"){
        pri1.value = '₹10';
    }else if(selectedOption ==="500gm") {
        pri1.value = '₹20';
    }
    else if(selectedOption ==="1000gm"){
        pri1.value='₹40';
    }else{
        pri1.value='';
    }
});

let qty2 = document.getElementById("qut2");
let pri2 = document.getElementById("pr2");

qty2.addEventListener("change", function(){
    let selectedOption = qty2.value;

    if(selectedOption === "250gm"){
        pri2.value = '₹20';
    }else if(selectedOption==="500gm") {
        pri2.value = '₹40';
    }
    else if(selectedOption ==="1000gm"){
        pri2.value='₹80';
    }else{
        pri2.value='';
    }
});


let qty3 = document.getElementById("qut3");
let pri3 = document.getElementById("pr3");

qty3.addEventListener("change", function(){
    let selectedOption = qty3.value;

    if(selectedOption === "250gm"){
        pri3.value = '₹8';
    }else if(selectedOption ==="500gm") {
        pri3.value = '₹16';
    }
    else if(selectedOption ==="1000gm"){
        pri3.value='₹32';
    }else{
        pri3.value='';
    }
});

let qty4 = document.getElementById("qut4");
let pri4 = document.getElementById("pr4");

qty4.addEventListener("change", function(){
    let selectedOption = qty4.value;

    if(selectedOption === "250gm"){
        pri4.value = '₹12';
    }else if(selectedOption === "500gm") {
        pri4.value = '₹24';
    }
    else if(selectedOption === "1000gm"){
        pri4.value='₹48';
    }else{
        pri4.value='';
    }
});





