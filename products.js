let productDiv = document.getElementById("right-bottom");

var globalData = []
let url = "https://happy-ant-crown.cyclic.app/products";

fetch(url)
.then(res =>{
    return(res.json())
})
.then(data=>{
    globalData =  [...data]
    displayProd(data)
   
   
})



function displayProd(data){
    document.querySelector("#right-bottom").innerHTML=""
    data.forEach((item)=>{
        let prodImg = item.image;
        let prodName = item.title;
        let category = item.category;
        let prodPrice = item.price;
        return getasProd(prodImg, prodName, category, prodPrice)
    }).join("")
}

function getasProd(prodImg, prodName, category, prodPrice){
    productDiv.innerHTML += `
    <div>
        <img src="${prodImg}" alt="${prodName}">
        <h2>${prodName.substring(0, 20)}</h2>
        <p>${category}</p>
        <h2>₹${prodPrice}</h2>
        <button>ADD TO BAG</button>
    </div>
    `
}


// console.log(globalData)
// search function 

let searchbtn = document.querySelector("#s")
searchbtn.addEventListener("input",searchfun)

function searchfun(){
    let inp = document.querySelector("#s").value 
    console.log(inp)

   let newData = globalData.filter(function(elem){
    return elem.title.toLowerCase().includes(inp.toLowerCase())
   })

//    console.log(newData)

if(inp!==""){
    displayProd(newData)
}else{
    console.log("nothing")
    displayProd(globalData)
}


}



// filter function 

let sortData = document.querySelector("#sort")
sortData.addEventListener("change",sorting)

function sorting(){
    let svalue = document.querySelector("#sort").value

    // console.log(svalue)

    if(svalue=="LTH"){
        globalData.sort(function(a,b){return a.price - b.price})
    }
    if(svalue=="HTL"){
        globalData.sort(function(a,b) {return b.price - a.price} )
    }
    if(svalue==""){
        globalData.sort(function(a,b){return a.id - b.id})
    }

    displayProd(globalData)
}