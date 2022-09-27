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

const basePrice = 2.49;


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



