function buyItems(itemName, priceID, quantityID) {
    let price = document.getElementById(priceID);
    let selectedQty = document.getElementById(quantityID);
    
    if(selectedQty.value==='none'){
        alert("Please select valid quantity...!")
    }else{
        let address=prompt("Please enter your address for delivery...");
        if(address){
            alert( `Order Confirmed...!\nAddress:\n${address}\n\nOrder Details:\n${itemName}\nQuantity:${selectedQty.value}\nPrice:${price.value}\nThankYou for shopping with us.....`);
        }else{
            alert("Address not entered...Order cancelled...!");
        }
    }
}

    

function buyElec(itemName,priceID){
    let innerElement=document.getElementById(priceID);
    let placeholderValue=innerElement.getAttribute("placeholder");
    let address=prompt("Please enter your address  for delivery");
    if(address){
        alert(`Order Confirmed...!\nAddress:\n${address}\nOrder Details:\n${itemName}\nPrice:${placeholderValue}\nThankYou for shopping with us.....`);
    }else{
        alert("Address not entered...Order cancelled...!");
    }
}
