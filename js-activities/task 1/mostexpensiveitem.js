function mostExpensive (array) {
    let maxPrice = 0;
    let itemId;  
    for (let i = 0; i < array.length; i++){
                
        if ( maxPrice < (array[i]["price"] * array[i]["stock"])){
           
                maxPrice = (array[i]["price"] * array[i]["stock"]);
                console.log(maxPrice);
                itemId = i;
                console.log(itemId);
            } 
        return array[itemId];     
        //console.log(`The item that's most expensive is: ${(array[itemId]["item"])}, with a total price of: £${maxPrice}`)
    }
}
let test = [
    { item: "irn bru", price: 3.25, stock: 50},
    { item: "fanta", price: 3.98, stock: 45 },
    { item: "diet coke", price: 4.40, stock: 38 }, 
    { item: "7up", price: 3.99, stock: 42 }, 
];
//mostExpensive(test);
console.log(mostExpensive(test));