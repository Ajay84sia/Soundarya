let x = document.querySelector("#btn")
x.addEventListener("click",signIn)

let dataArr = JSON.parse(localStorage.getItem("userData")) || []


function signIn(){
    let firstName = document.querySelector("#fname").value
    console.log(firstName)
    let lastName = document.querySelector("#lname").value 

    let email = document.querySelector("#email").value 
    let phoneNumber = document.querySelector("#phone").value 
    let password = document.querySelector("#password").value 

    let dataObj={
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
    }


   if(dataObj.firstName=="" || dataObj.lastName=="" || dataObj.password=="" || dataObj.email=="" || dataObj.phoneNumber==""){
    alert("Please fill all the details")
   }else{

    dataArr.push(dataObj)
    localStorage.setItem("userData",JSON.stringify(dataArr))
    alert("Successfully Registered!")
    window.location = "login.html"
   }



    console.log(dataObj)
    
    // localStorage.setItem("users",JSON.stringify(dataObj))


}