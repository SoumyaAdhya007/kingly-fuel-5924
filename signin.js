document.querySelector('form').addEventListener("submit",signIn)
let signInArr=[];
let signUpArr=JSON.parse(localStorage.getItem("signUp-page"));
// signIn(signUpArr)
function signIn(event){
    event.preventDefault();
    let signIn_email= document.querySelector("#email").value;
    let signIn_password=document.querySelector("#password").value;
    signUpArr.forEach((elem)=>{
        if(elem.email==signIn_email && elem.password==signIn_password){
            alert("Welcome");
            window.location.assign("account.html");
            return
        }
        let x=0;
         if(elem.email!=signIn_email && elem.password!=signIn_password){
            document.querySelector("#singin-out").innerText="Account not found"
            
        }
    })
}