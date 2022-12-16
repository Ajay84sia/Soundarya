document.querySelector(".signbtn").addEventListener("click", checkUser)

function checkUser(){
    let enterMail = document.querySelector("#email1").value;
    let enterPass = document.querySelector("#password1").value;

    var getData = JSON.parse(localStorage.getItem("userData"))
    var flag = false;

    for(let i=0; i<getData.length; i++){

        console.log(getData[i])
                
        if(enterMail == getData[i].email && enterPass == getData[i].password){
            flag = true;
            alert("Login Successful! "+" Welcome, "+getData[i].firstName+" "+getData[i].lastName)
            location.href = "./products.html";
            break;            
        }
      
    }

    if(enterMail== "" || enterPass == ""){
        alert("Please, enter all the details");
    }else if(flag==false){
        alert("Wrong Credentials!")
    }


}