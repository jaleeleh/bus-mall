'use strict';
let leftIndex;
let centerIndex;
let rightIndex;
let leftElement = document.getElementById('left');
let centerElement = document.getElementById('center');
let rightElement = document.getElementById('right');
let counter = 0;
let maxAttempts = 25;
let result=document.getElementById('submit');

function ProductImage(productName, source) {
    this.name = productName;
    this.source = source;
    this.votes = 0;
    this.shown = 0;
    ProductImage.products.push(this);
}
ProductImage.products = [];

new ProductImage('bag', 'images/bag.jpg');
new ProductImage('banana', 'images/banana.jpg');
new ProductImage('bathroom', 'images/bathroom.jpg');
new ProductImage('boots', 'images/boots.jpg');
new ProductImage('breakfast', 'images/breakfast.jpg');
new ProductImage('bubblegum', 'images/bubblegum.jpg');
new ProductImage('chair', 'images/chair.jpg');
new ProductImage('cthulhu', 'images/cthulhu.jpg');
new ProductImage('dog-duck', 'images/dog-duck.jpg');
new ProductImage('dragon', 'images/dragon.jpg');
new ProductImage('pen', 'images/pen.jpg');
new ProductImage('pet-sweep', 'images/pet-sweep.jpg');
new ProductImage('scissors', 'images/scissors.jpg');
new ProductImage('shark', 'images/shark.jpg');
new ProductImage('sweep', 'images/sweep.png');
new ProductImage('tauntaun', 'images/tauntaun.jpg');
new ProductImage('unicorn', 'images/unicorn.jpg');
new ProductImage('usb', 'images/usb.gif');
new ProductImage('water-can', 'images/water-can.jpg');
new ProductImage('wine-glass', 'images/wine-glass.jpg');

//console.log(ProductImage.products);
function randomIndex() {
    return Math.floor(Math.random() * ProductImage.products.length);
}

function renderThreeImages() {
    leftIndex = randomIndex();

    do {
        centerIndex = randomIndex();
    } while (leftIndex === centerIndex)

    do { rightIndex = randomIndex() }
    while (rightIndex === leftIndex || rightIndex === centerIndex)
    leftElement.src = ProductImage.products[leftIndex].source;
    centerElement.src = ProductImage.products[centerIndex].source;
    rightElement.src = ProductImage.products[rightIndex].source;
}
renderThreeImages()
//    console.log(ProductImage.products[leftIndex])
//    console.log(ProductImage.products[rightIndex])
//    console.log(ProductImage.products[centerIndex])

leftElement.addEventListener('click', handleUserClick);
centerElement.addEventListener('click', handleUserClick);
rightElement.addEventListener('click', handleUserClick);



function handleUserClick(event) {
    counter++;

    if (counter < maxAttempts) {
        if (event.target.id === 'left') {
            ProductImage.products[leftIndex].votes++

        } else if (event.target.id === 'center') {
            ProductImage.products[centerIndex].votes++
        } else { ProductImage.products[rightIndex].votes++ }
        renderThreeImages()

    } else {
             leftElement.removeEventListener('click', handleUserClick);
             centerElement.removeEventListener('click', handleUserClick);
             centerElement.removeEventListener('click', handleUserClick);
             result.addEventListener('click',submitter);
             
       
    }
        
}


function submitter(event){
    console.log(event)
     let emptyPage = document.getElementById('theResult');
           emptyPage.textContent='';
    let unorderedList=document.createElement('ul');
    theResult.appendChild(unorderedList);
    for(let i=0;i<ProductImage.products.length;i++){
        let list=document.createElement('li');
        unorderedList.appendChild(list);
        list.textContent = ProductImage.products[i].name +  ' has ' + ProductImage.products[i].votes + ' votes';
      
      } }



