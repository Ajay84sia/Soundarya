    // document.querySelector("#letushelp").addEventListener("click",function(){
    //     document.querySelector("#footer1>div:nth-child(2)").visibility = "visible";
    // })
    document.querySelector("#subscribe").addEventListener("submit", function(event){
        event.preventDefault();
        let email = document.querySelector("#email").value;
        let confirm = document.querySelector("#confirm").value;
        if(email == confirm){
            document.querySelector("#subscribe>p:last-child").innerText = "Thank You for signing up! Success"
            document.querySelector("#subscribe>p:last-child").style.color = "green";
            document.querySelector("#subscribe>p:last-child").style.visibility = "visible";
        }
        else{
            document.querySelector("#subscribe>p:last-child").innerText = "Email address do not match!"
            document.querySelector("#subscribe>p:last-child").style.color = "red";
            document.querySelector("#subscribe>p:last-child").style.visibility = "visible";
        }
    })