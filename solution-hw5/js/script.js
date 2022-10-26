let Glazing = [
    {
        glazingOpt: 'Keep original',
        priceAdj: 0, //priceAdj is the value of galzing options here
    },
    {
        glazingOpt: 'Sugar milk',
        priceAdj: 0,
    },
    {
        glazingOpt: 'Vanilla milk', 
        priceAdj: 0.5,
    },
    {
        glazingOpt: 'Double chocolate',
        priceAdj: 1.5,
    },
    
];

let Pack = [
    {
        packSize: '1',
        priceAdj: 1, 
    },
    {
        packSize: '3',
        priceAdj: 3,
    },
    {
        packSize: '6', 
        priceAdj: 5,
    },
    {
        packSize: '12',
        priceAdj: 10,
    },

];




let selectElementGlaze = document.querySelector('#glazingOptions');

for (let i=0; i<Glazing.length; i++){
    let option = document.createElement('option');
    option.text = Glazing[i].glazingOpt;
    option.value = Glazing[i].priceAdj; //assign priceAdj to value
    selectElementGlaze.add(option);    
}


let selectElementPack = document.querySelector('#packNumber');

for (let i=0; i<Pack.length; i++){
    let option = document.createElement('option');
    option.text = Pack[i].packSize;
    option.value = Pack[i].priceAdj; 
    selectElementPack.add(option);
}


function glazingChange(element){
    const priceChange = parseFloat(element.value);//get value of selected glazing option
 /* console.log("selected value1 " + priceChange) */
  
    let selectElementPack = document.querySelector("#packNumber")
    const packingPrice = parseFloat(selectElementPack.value);
    const finalPrice = (basePrice + priceChange) * packingPrice;
 /* console.log('total p1 ' + finalPrice) */

    let myPrice = document.querySelector("#totalPrice")
    myPrice.innerHTML = "$"+finalPrice.toFixed(2);
    
}

function packChange(element){
    const priceChange = parseFloat(element.value);
  
    let selectElementGlazing = document.querySelector("#glazingOptions")
    const glazingPrice = parseFloat(selectElementGlazing.value);
    const finalPrice = (basePrice + glazingPrice) * priceChange;
 /* console.log('total p2 ' + finalPrice) */

    let myPrice = document.querySelector("#totalPrice")
    myPrice.innerHTML = "$"+finalPrice.toFixed(2);
}

//----------------------------------hw4----------------------------------//
let Cart = [];

//get roll type from url
const queryString = window.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log('parameter: ' + params);
const rollType = params.get("roll");
console.log("roll type: " + rollType);


// Update the header text
const headerElement = document.querySelector('#smallTitle');
headerElement.innerText = rollType + " cinnamon roll";

// Update the image
const rollImage = document.querySelector('#productImg');
rollImage.src = rolls[rollType].imageFile;

//update base price
const bP= document.querySelector('#totalPrice');
bP.innerText = rolls[rollType].basePrice;

const basePrice = rolls[rollType].basePrice;

//add to cart
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function addToCart() {
    let r = new Roll(rollType, selectElementGlaze.value, selectElementPack.value, rolls[rollType].basePrice);
    Cart.push (r);
    console.log(Cart);
}