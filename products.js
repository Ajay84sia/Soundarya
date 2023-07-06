let productDiv = document.getElementById("right-bottom");


let url = "https://glamorous-helmet-yak.cyclic.app/products";

let bag = [];
let cartItems = JSON.parse(localStorage.getItem("cartProducts")) || [];

fetch(url)
.then((res) => res.json())
.then(data => 
  { bag = data; 
    displayprod(data);
});

// search function 

let searchbtn = document.querySelector("#s")
searchbtn.addEventListener("input",searchfun)

function searchfun(){
    let inp = document.querySelector("#s").value 
    console.log(inp)

   let newData = bag.filter(function(elem){
    return elem.title.toLowerCase().includes(inp.toLowerCase())
   })


if(inp!=""){
    displayprod(newData)
}else{
    console.log("nothing")
    displayprod(bag)
}


}



// filter function 

let sortData = document.querySelector("#sort")
sortData.addEventListener("change",sorting)

function sorting(){
    let svalue = document.querySelector("#sort").value

    // console.log(svalue)

    if(svalue=="LTH"){
        bag.sort(function(a,b){return a.price - b.price})
    }
    if(svalue=="HTL"){
        bag.sort(function(a,b) {return b.price - a.price} )
    }
    if(svalue==""){
        bag.sort(function(a,b){return a.id - b.id})
    }

    displayprod(bag)
}


  // sort category functionality

  function handleCat(){

    
    let selectCat =  document.querySelector("#prodType").value;

      if(selectCat == "Body Spray"){
        let newData = bag.filter(function(elem){
          return elem.category.includes("Body Spray")
          
        }) 
        displayprod(newData);       
      }
      if(selectCat == "Body Cream"){
        let newData = bag.filter(function(elem){
          return elem.category.includes("Body Cream")
          
        }) 
        displayprod(newData);       
      }
      if(selectCat == "Body Lotion"){
        let newData = bag.filter(function(elem){
          return elem.category.includes("Body Lotion")
          
        }) 
        displayprod(newData);       
      }
      if(selectCat == "Body Wash"){
        let newData = bag.filter(function(elem){
          return elem.category.includes("Body Wash")
          
        }) 
        displayprod(newData);       
      }
      if(selectCat == "Shower Gel"){
        let newData = bag.filter(function(elem){
          return elem.category.includes("Shower Gel")
          
        }) 
        displayprod(newData);       
      }
      if(selectCat == "Candle"){
        let newData = bag.filter(function(elem){
          return elem.category.includes("Candle")
          
        }) 
        displayprod(newData);       
      }
      if(selectCat == "Cleansing Bar"){
        let newData = bag.filter(function(elem){
          return elem.category.includes("Cleansing Bar")
          
        }) 
        displayprod(newData);       
      }
      if(selectCat == "Hand Soap"){
        let newData = bag.filter(function(elem){
          return elem.category.includes("Hand Soap")
          
        }) 
        displayprod(newData);       
      }
      
      if(selectCat == ""){
        bag.sort((a,b) => a.id - b.id);
        displayprod(bag)
      }
       
    
  }


// Display products 

function displayprod(data){

   productDiv.innerHTML ="";


      data.forEach(function (elem){

          let div1 = document.createElement("div");

          let imageDis = document.createElement("img")
          imageDis.setAttribute("src",elem.image);

          let tiTle = document.createElement("h3")
          tiTle.innerText = elem.title;

          let cateGory = document.createElement("p")
          cateGory.innerText =  elem.category;

          let dealPrice = document.createElement("h2")
          dealPrice.innerText =`$${elem.price}`;

          let btn = document.createElement("button")
          btn.innerText = "ADD TO BAG";
          btn.addEventListener("click", function () {
            let x = cartItems.filter(data => data.title == elem.title);
            if(x.length == 0){
                cartItems.push({...elem , count:1});
                console.log("inside if")
                alert("product added in the cart")
              }else{
                console.log(x[0].count++, "inside else")
                alert("product quantity increased")
            }
            localStorage.setItem("cartProducts",JSON.stringify(cartItems))            
          })
          

          div1.append(imageDis,tiTle,cateGory,dealPrice,btn);

          productDiv.append(div1);
        
       })
      
  }
