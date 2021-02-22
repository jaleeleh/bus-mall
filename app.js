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
let previousIndex=[25,25,25];
let count=0;
let productNames = [];
let productVotes = [];
let productShown = [];

function ProductImage(productName, source) {
    this.name = productName;
    this.source = source;
    this.votes = 0;
    this.shown = 0;
    ProductImage.products.push(this);
    productNames.push(this.name)

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
    do{leftIndex = randomIndex();}
    while(leftIndex===previousIndex[0]||leftIndex===previousIndex[1]||leftIndex===previousIndex[2])

    do {
        centerIndex = randomIndex();
    } while (leftIndex === centerIndex||centerIndex===previousIndex[0]||centerIndex===previousIndex[1]||centerIndex===previousIndex[2])

    do { rightIndex = randomIndex();
       
     }
    while (rightIndex === leftIndex || rightIndex === centerIndex||rightIndex===previousIndex[0]||rightIndex===previousIndex[1]||rightIndex===previousIndex[2])
    leftElement.src = ProductImage.products[leftIndex].source;
    centerElement.src = ProductImage.products[centerIndex].source;
    rightElement.src = ProductImage.products[rightIndex].source;
    console.log(previousIndex)
    for(let i=0;i<ProductImage.products.length;i++){
        if(leftIndex==i){
            ProductImage.products[i].shown++
        }else if(centerIndex==i){
            ProductImage.products[i].shown++;
        }else if(rightIndex==i) {
            ProductImage.products[i].shown++;}

}
previousIndex.pop();
previousIndex.pop();
previousIndex.pop();
previousIndex=[leftIndex,centerIndex,rightIndex];
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

    if (counter <= maxAttempts) {
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
            //  result.addEventListener('click',submitter);
             for (let i = 0; i < ProductImage.products.length; i++) {
                // 0
                productVotes.push(ProductImage.products[i].votes);
          
                productShown.push(ProductImage.products[i].shown);
              }
              drawChart();
             
       
    }
        
}


function  drawChart() {

    let ctx = document.getElementById('myChart').getContext('2d');
  
    let chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',
  
      // The data for our dataset
      data: {
        labels: productNames,
  
        datasets: [
  
  
          {
            label: 'products votes',
            backgroundColor: '#c6a9a3',
            borderColor: '#c6a9a3',
            data: productVotes
          },
          
          {
            label: 'product shown',
            backgroundColor: '#99bbad',
            borderColor:'#99bbad',
            data: productShown
          },
     
  
        ]
      },
      //  
  
      // Configuration options go here
      options: {}
    });
    // console.log(chart);
  
    // Chart(ctx,{})
  
  }


// function submitter(event){
//     console.log(event)
//      let emptyPage = document.getElementById('theResult');
//            emptyPage.textContent='';
//     let unorderedList=document.createElement('ul');
//     theResult.appendChild(unorderedList);
//     for(let i=0;i<ProductImage.products.length;i++){
//         let list=document.createElement('li');
//         unorderedList.appendChild(list);
//         list.textContent = ProductImage.products[i].name +  ' had ' + ProductImage.products[i].votes + ' votes, and was seen  ' + ProductImage.products[i].shown+' times .'
      
//       } }



