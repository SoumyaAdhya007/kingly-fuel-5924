let cartItme=JSON.parse(localStorage.getItem("cart-item"));

displayCart(cartItme);
function displayCart(cartItme){
document.querySelector("#cart-item").innerHTML=null;
cartItme.forEach((elem,i) => {
    let div=document.createElement("div");
        let div1 = document.createElement("div");
        let img = document.createElement("img");
        let div2 = document.createElement("div")
        img.setAttribute("src", elem.img);
        let name = document.createElement("h4");
        name.innerText = elem.name;
        let price = document.createElement("h3");
        price.innerText = elem.price;
        let div3= document.createElement("div");
        let div4= document.createElement("div");
        let div5= document.createElement("div");
        let div6= document.createElement("div");
        let increase=document.createElement("button");
        increase.innerText="+";
        increase.addEventListener("click", ()=>{
            cartItme[i].quantity++;
            localStorage.setItem("cart",JSON.stringify(cartItme));
            displayCart(cartItme)
        })
        let quantity=document.createElement("span");
        quantity.innerText=elem.quantity;
        let decrement= document.createElement("button");
        decrement.innerText="-";
        decrement.addEventListener("click", ()=>{
            if(elem.quantity<=1)return;
            cartItme[i].quantity--;
            localStorage.setItem("cart",JSON.stringify(cartItme));
            displayCart(cartItme)
        })
        let remove = document.createElement("p");
        remove.innerText = "x Remove";
        div1.append(img);
        div3.append(increase,quantity,decrement);
        div4.append(div3);
        div5.append(name,price);
        div6.append(div4,remove)
        div2.append(div5,div6);
        div.append(div1,div2)
        document.querySelector("#cart-item").append(div)
    })
    
}