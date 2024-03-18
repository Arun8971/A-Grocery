// Coke
let pri1 = document.getElementById('pr1');
let vol1 = document.getElementById('vol1');

vol1.addEventListener("change", function () {
    let selectedOption = vol1.value;
    if (selectedOption === "250ml") {
        pri1.value = '₹30';
    } else if (selectedOption === "500ml") {
        pri1.value = '₹60';
    } else if (selectedOption === "1000ml") {
        pri1.value = '₹120';
    } else {
        pri1.value = '';
    }
});

// Pepsi
let pri2 = document.getElementById('pr2');
let vol2 = document.getElementById('vol2');

vol2.addEventListener("change", function () {
    let selectedOption = vol2.value;
    if (selectedOption === "250ml") {
        pri2.value = '₹20';
    } else if (selectedOption === "500ml") {
        pri2.value = '₹40';
    } else if (selectedOption === "1000ml") {
        pri2.value = '₹80';
    } else {
        pri2.value = '';
    }
});

// Sprite
let pri3 = document.getElementById('pr3');
let vol3 = document.getElementById('vol3');

vol3.addEventListener("change", function () {
    let selectedOption = vol3.value;
    if (selectedOption === "250ml") {
        pri3.value = '₹25';
    } else if (selectedOption === "500ml") {
        pri3.value = '₹50';
    } else if (selectedOption === "1000ml") {
        pri3.value = '₹100';
    } else {
        pri3.value = '';
    }
});

// Mountain Dew
let pri4 = document.getElementById('pr4');
let vol4 = document.getElementById('vol4');

vol4.addEventListener("change", function () {
    let selectedOption = vol4.value;
    if (selectedOption === "250ml") {
        pri4.value = '₹30';
    } else if (selectedOption === "500ml") {
        pri4.value = '₹60';
    } else if (selectedOption === "1000ml") {
        pri4.value = '₹120';
    } else {
        pri4.value = '';
    }
});

// Fanta
let pri5 = document.getElementById('pr5');
let vol5 = document.getElementById('vol5');

vol5.addEventListener("change", function () {
    let selectedOption = vol5.value;
    if (selectedOption === "250ml") {
        pri5.value = '₹25';
    } else if (selectedOption === "500ml") {
        pri5.value = '₹50';
    } else if (selectedOption === "1000ml") {
        pri5.value = '₹100';
    } else {
        pri5.value = '';
    }
});

// 7UP
let pri6 = document.getElementById('pr6');
let vol6 = document.getElementById('vol6');

vol6.addEventListener("change", function () {
    let selectedOption = vol6.value;
    if (selectedOption === "250ml") {
        pri6.value = '₹20';
    } else if (selectedOption === "500ml") {
        pri6.value = '₹40';
    } else if (selectedOption === "1000ml") {
        pri6.value = '₹80';
    } else {
        pri6.value = '';
    }
});


//funtions for calcualting price and order confirmation
function buyCold(itemName,priceId,volumeId,quantityId){
    let volume=document.getElementById(volumeId);
    let price=document.getElementById(priceId);
    let qty=document.getElementById(quantityId);
    

    if(qty.value==="none"){
        alert("Please select valid quantity...!");
    }else if(volume.value==="none"){
        alert("Please select valid amount of volume");
    }else{
        let address=prompt("Please enter your address for delivery...");
        if(address){
            let priceValue=(price.value.replace("₹",""));
            let quantityValue=qty.value;
            let totalPrice=priceValue*quantityValue;
            alert( `Order Confirmed...!\nAddress:\n${address}\n\nOrder Details:\n${itemName}\nVolume:${volume.value}\nPrice:${totalPrice}\nThankYou for shopping with us.....`);
        }
    }
}


