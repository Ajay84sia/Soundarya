var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let sum = 0;
let cartAll = JSON.parse(localStorage.getItem("cartProducts")) || [];
let cartData = document.querySelector(".displayCart");
let dec = document.querySelector("#dec");
displayProd(cartAll);
// console.log(cartAll);

function displayProd(data) {
  data.forEach((item) => {
    let prodImg = item.image;
    let prodName = item.title;
    let category = item.category;
    let prodPrice = item.price;
    var quantity = item.count;

    return getasProd(prodImg, prodName, category, prodPrice, quantity);
  });

  // .join("");
}

function getasProd(prodImg, prodName, category, prodPrice, quantity) {
  sum += prodPrice * quantity;
  console.log(sum);
  cartData.innerHTML += `
      <div class="data">
      <img src="${prodImg}" alt="${prodName}">
      <div>
      <h3>${prodName.substring(0, 20)}</h3>
      <p>${category}</p>
      <p><u>Promotional Details</u></p>
      </div>
          <p>$${prodPrice}</p>

          <div>
          <p>${quantity}</p>
          <p>Available</p>
          </div>
          
          <h2>$${prodPrice * quantity}</h2>
          <img id="cross" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ecvJSRgBsg4wxeqVmq0BPwM3MKuMnx5MAg&usqp=CAU" alt="">
          
          </div>
          <hr>
      `;
}

document.getElementById("product-price").innerText = sum;
let roundTotal = sum + 6.99 + 2.4;
// if(sum==0){
//   let total = document.getElementById("total").innerText =0
// }
let total = (document.getElementById("total").innerText =
  Math.round(roundTotal));

let apply = document.getElementById("apply-btn>div");
// apply.addEventListener("click", function () {
//   console.log("hello");
// });

let cross=document.querySelector("#cross")

// cross.addEventListener("click",function(){
//   alert("cross")
// })
