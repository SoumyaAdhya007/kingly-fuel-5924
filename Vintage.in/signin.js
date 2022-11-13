document.querySelector('form').addEventListener("submit", signIn)
let accountArr =JSON.parse(localStorage.getItem("account-data"))|| [];
let signUpArr = JSON.parse(localStorage.getItem("signUp-page"));
// signIn(signUpArr)
function signIn(event) {
    event.preventDefault();
    let signIn_email = document.querySelector("#email").value;
    let signIn_password = document.querySelector("#password").value;
    let count = 0;
    // signUpArr.forEach((elem)=>{
    //     if(elem.email==signIn_email && elem.password==signIn_password){
    //         alert("Welcome");
    //         window.location.assign("account.html");
    //         return
    //     }
    //     else if(elem.email!=signIn_email && elem.password!=signIn_password){
    //         // document.querySelector("#singin-out").innerText="Account not found"
    //         count++;
    //     }

    // })
    for (let i = 0; i < signUpArr.length; i++) {
        if (signUpArr[i].email == signIn_email && signUpArr[i].password == signIn_password) {
            alert("Welcome");
            accountArr.push(signUpArr[i]);
            localStorage.setItem("account-data",JSON.stringify(accountArr));
            window.location.assign("index.html");
            return;
        }
        else if (signUpArr[i].email != signIn_email && signUpArr[i].password != signIn_password) {
            // document.querySelector("#singin-out").innerText="Account not found"
            count++;
        }
    }
    if(count>=1){
        alert("Wrong Credentials")
    }
}

