let signUpArr=JSON.parse(localStorage.getItem("signUp-page")) ||[];
document.querySelector("form").addEventListener("submit",signUp)
function signUp(event){
    event.preventDefault();
let name= document.querySelector("#name").value;
let email= document.querySelector("#email").value;
let phone= document.querySelector("#phone").value;
let password= document.querySelector("#password").value;
let signUpObj={
    name,
    email,
    phone,
    password
}
if(signUpObj.name==""||signUpObj.email==""||signUpObj.phone==""||signUpObj.phone.length!=10||signUpObj.password.length<8){
    alert("Please Fill Apropiate Details")
}else{
    signUpArr.push(signUpObj);
    localStorage.setItem("signUp-page", JSON.stringify(signUpArr));
    alert("Your account has been successfully created")
    window.location.assign("signin.html")
    
}
}
// signUp()