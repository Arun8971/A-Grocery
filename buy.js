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

    

