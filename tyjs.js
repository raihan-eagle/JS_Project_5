// funtion declared here 

function priceSet(product, price){
    
    const productCost = document.getElementById(product + "-cost");
    productCost.innerText = price;

    const memoryCost = document.getElementById("memory-cost");
    const memoryCostNum = parseInt(memoryCost.innerText);

    const storageCost = document.getElementById("storage-cost");
    const storageCostNum = parseInt(storageCost.innerText);

    const deliveryCost = document.getElementById("delivery-cost");
    const deliveryCostNum = parseInt(deliveryCost.innerText);

    // Calculation here 
    const totalCost = 1299 + memoryCostNum + storageCostNum +deliveryCostNum;
    
    const totalPrice = document.getElementById("toral-price");
    totalPrice.innerText = totalCost;

    const grandTotal = document.getElementById("grand-total");
    grandTotal.innerText = totalCost;

}

// If Promo Code Apply 
document.getElementById("promo-apply").addEventListener('click',function(){
    const promoCode = document.getElementById("promo-code");
        if(promoCode.value == 'stevekaku'){
             
        const grandTotal = document.getElementById("grand-total");
        const grabdTotalNum = parseInt(grandTotal.innerText);
        const total = (grabdTotalNum * 0.8);
        grandTotal.innerText = total;
    }
    promoCode.value='';
})

// Events & function call 
document.getElementById("memory-8").addEventListener('click', function(){
    priceSet('memory', 0);
})

document.getElementById("memory-16").addEventListener('click', function(){
    priceSet('memory', 180);
})
document.getElementById("SSD-256").addEventListener('click', function(){
    priceSet('storage', 0);
})
document.getElementById("SSD-512").addEventListener('click', function(){
    priceSet('storage', 100);
})
document.getElementById("SSD-1").addEventListener('click', function(){
    priceSet('storage', 180);
})
document.getElementById("delivery-free").addEventListener('click', function(){
    priceSet('delivery', 0);
})
document.getElementById("delivery-20").addEventListener('click', function(){
    priceSet('delivery', 20);
})

// end -----------