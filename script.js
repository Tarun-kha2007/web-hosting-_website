let option=document.getElementById("tosignup");
option.addEventListener("click",
    function(){
        let signin=document.getElementById("SignIn");
        let signup=document.getElementById("SignUp");
        signin.classList.toggle("hide");
        signup.classList.toggle("visible");
    }
);
let op=document.getElementById("tosignin");
op.addEventListener("click",
    function(){
        let signin=document.getElementById("SignIn");
        let signup=document.getElementById("SignUp");
        signin.classList.toggle("hide");
        signup.classList.toggle("visible");
    }
);