let price1=document.getElementById("pr1");
let quantity1=document.getElementById("qut1");

quantity1.addEventListener("change",function(){
    let selectedOption=quantity1.value;

    if(selectedOption==="1"){
        price1.value='₹100';
    }else if(selectedOption==="2"){
        price1.value='₹200';
    }else if(selectedOption==="3"){
        price1.value='300';
    }else{
        price1.value='';
    }
});


let price2=document.getElementById("pr2");
let quantity2=document.getElementById("qut2");

quantity2.addEventListener("change",function(){
    let selectedOption=quantity2.value;

    if(selectedOption==="1"){
        price2.value='₹50';
    }else if(selectedOption==="2"){
        price2.value='₹100';
    }else if(selectedOption==="3"){
        price2.value='₹150';
    }else{
        price2.value='';
    }
});

let price3=document.getElementById("pr3");
let quantity3=document.getElementById("qut3");

quantity3.addEventListener("change",function(){
    let selectedOption=quantity3.value;

    if(selectedOption==="1"){
        price3.value='₹30';
    }else if(selectedOption==="2"){
        price3.value='₹60';
    }else if(selectedOption==="3"){
        price3.value='90';
    }else{
        price3.value='';
    }
});

let price4=document.getElementById("pr4");
let quantity4=document.getElementById("qut4");

quantity4.addEventListener("change",function(){
    let selectedOption=quantity4.value;

    if(selectedOption==="1"){
        price4.value='₹45';
    }else if(selectedOption==="2"){
        price4.value='₹90';
    }else if(selectedOption==="3"){
        price4.value='₹135';
    }else{
        price4.value='';
    }
});

let price5=document.getElementById("pr5");
let quantity5=document.getElementById("qut5");

quantity5.addEventListener("change",function(){
    let selectedOption=quantity5.value;

    if(selectedOption==="1"){
        price5.value='₹30';
    }else if(selectedOption==="2"){
        price5.value='₹60';
    }else if(selectedOption==="3"){
        price5.value='₹90';
    }else{
        price5.value='';
    }
});

let price6=document.getElementById("pr6");
let quantity6=document.getElementById("qut6");

quantity6.addEventListener("change",function(){
    let selectedOption=quantity6.value;

    if(selectedOption==="1"){
        price6.value='₹25';
    }else if(selectedOption==="2"){
        price6.value='₹50';
    }else if(selectedOption==="3"){
        price6.value='₹75';
    }else{
        price6.value='';
    }
});