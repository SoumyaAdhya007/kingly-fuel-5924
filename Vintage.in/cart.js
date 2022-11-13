let cartItme=JSON.parse(localStorage.getItem("cart-item"))||[];
let cartTotal=JSON.parse(localStorage.getItem("cart-total"));
displayCart(cartItme);


function displayCart(cartItme){
document.querySelector("#cart-item").innerHTML=null;
let cartTotal=cartItme.reduce((a,b)=>{
    return a+Number(b.price)*b.quantity;;
},0)
document.querySelector("#subtotal").innerText= `₹${cartTotal}`;
document.querySelector("#total").innerText=`₹${cartTotal}`;
localStorage.setItem("cart-total",JSON.stringify(cartTotal));


// function displayCart(cartItme){
cartItme.forEach((elem,i) => {
    let div=document.createElement("div");
        let div1 = document.createElement("div");
        let img = document.createElement("img");
        let div2 = document.createElement("div")
        img.setAttribute("src", elem.image);
        let name = document.createElement("h4");
        name.innerText = elem.name;
        let price = document.createElement("h3");
        price.innerText = `₹${elem.price}`;
        let div3= document.createElement("div");
        let div4= document.createElement("div");
        let div5= document.createElement("div");
        let div6= document.createElement("div");
        let div7= document.createElement("div");
        let div8= document.createElement("div");
        let increase=document.createElement("button");
        increase.innerText="+";
        increase.addEventListener("click", ()=>{
            cartItme[i].quantity++;
            localStorage.setItem("cart-item",JSON.stringify(cartItme));
            displayCart(cartItme)
        })
        let quantity=document.createElement("span");
        quantity.innerText=elem.quantity;
        let decrement= document.createElement("button");
        decrement.innerText="-";
        decrement.addEventListener("click", ()=>{
            if(elem.quantity<=1)return;
            cartItme[i].quantity--;
            localStorage.setItem("cart-item",JSON.stringify(cartItme));
            displayCart(cartItme)
        })
        let remove = document.createElement("p");
        remove.innerText = "x Remove";
        remove.addEventListener("click",function(){
            removeCart(elem,i)
        })
        div1.append(img);
        div2.append(name);
        div3.append(price);
        div4.append(increase,quantity,decrement);
        div5.append(remove);
        div6.append(div2,div3);
        div7.append(div4,div5)
        div8.append(div6,div7)
        div.append(div1,div8)
        document.querySelector("#cart-item").append(div)
    })
}

function removeCart(elem,i){
    cartItme.splice(i,1);
    localStorage.setItem("cart-item",JSON.stringify(cartItme));
    displayCart(cartItme)
}