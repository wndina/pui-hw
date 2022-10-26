//create a roll class
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice, cal) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.element=null;
    }
}

//size to adaptation price (from script.js)
const sizeAdj = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10
}

//glazing to adaptation price
const priceAdj = {
    "Keep original": 0,
    "Sugar milk": 0,
    "Vanilla milk": .5,
    "Double chocolate": 1.50
}

const cartSet = new Set();

//add 4 objects to cart
function addToCart(rollType, rollGlazing, packSize, rollPrice) {
    const cartItem = new Roll(rollType, rollGlazing, packSize, rollPrice);

    cartSet.add(cartItem); 
    return cartSet;
}

// ------------------------------hw6----------------------------------- //
if (localStorage.getItem('storedRoll') != null) {
    const cartArrayString = localStorage.getItem('storedRoll');
    const cartArrayParsed = JSON.parse(cartArrayString);
    
    for (parsedItem of cartArrayParsed) {
        addToCart(parsedItem.type, parsedItem.glazing, parsedItem.size, parsedItem.basePrice)
    }
    console.log(cartSet)
}
// ------------------------------hw6----------------------------------- //

//create a for loop to pass in each cartItem created
for (const cartItem of cartSet){
    createElement(cartItem);
    
}

function createElement(cartItem) {
    //get <template> id
    const template = document.querySelector("#cartItem");
    let cartItemClone = template.content.cloneNode(true); 
    cartItem.element = cartItemClone.querySelector('.cartRow');

    //remove cart item:
    const btnDelete = cartItem.element.querySelector('#btnDelete');
    btnDelete.addEventListener('click', () => {
      removeItem(cartItem);
    });
  
    // add the notecard clone to the DOM
    // find the notecard parent (#notecard-list) and add our notecard as its child
    const cartListElement = document.querySelector('.cartItemsDiv');
    cartListElement.prepend(cartItem.element);
    
    // populate the notecard clone with the actual notecard content
    updateCart(cartItem);
    
}



//update element
function updateCart(cartItem) {
  
    // get the HTML elements that need updating
    cartItem.element.querySelector("#rollName").innerText = cartItem.type + " Cinnamon Roll";
    cartItem.element.querySelector('#rollGlazing').innerText = "Glazing: " + cartItem.glazing;
    cartItem.element.querySelector('#rollPackSize').innerText = "Pack Size: " + cartItem.size;

    //how to link to jason.js rolls rolltype 
    cartItem.element.querySelector('.image').src = "Assets/products/" + cartItem.type.toLowerCase() + "-cinnamon-roll.jpg";

    //calculate price
    console.log("i bought:", cartItem.glazing, ", size adj: ", sizeAdj[cartItem.size])
    const calculatedPrice = ((cartItem.basePrice + priceAdj[cartItem.glazing]) * sizeAdj[cartItem.size]).toFixed(2);
    cartItem.element.querySelector('.cartPrice').innerText = "$" + calculatedPrice;
    return calculatedPrice; 

    
}


function removeItem(cartItem) {
    cartItem.element.remove();
    cartSet.delete(cartItem);

    totalPrice();
}


//update price
function totalPrice(){
    let totalPrice = 0;
    for (const item of cartSet){
        totalPrice= totalPrice + Number(((item.basePrice + priceAdj[item.glazing]) * sizeAdj[item.size]).toFixed(2));
    }
    console.log(totalPrice)
    document.querySelector("#totalCartP").innerText = "$" + totalPrice.toFixed(2);
    
}

totalPrice();

