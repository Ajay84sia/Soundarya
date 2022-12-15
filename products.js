let productDiv = document.getElementById("right-bottom");


let url = "https://happy-ant-crown.cyclic.app/products";

fetch(url)
.then(res =>{
    return(res.json())
})
.then(data=>{
    displayProd(data)
})


function displayProd(data){
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