
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

let homeproductArr = [];
let url = "https://636f6e75bb9cf402c8178107.mockapi.io/vintage";
async function producthome() {
    try {

        let res = await fetch(url);
        let out = await res.json();
        // homeproduct = [...out];
        // console.log(productArr)
        // productArr.push(out);
        homeproduct(out)
        // displayCart(out)
    }
    catch (err) {
        alert(err);
    }
}
producthome();
let cartItme=JSON.parse(localStorage.getItem("cart-item"))|| [];

let single_product = JSON.parse(localStorage.getItem("single-product")) || [];

function homeproduct(out){
    out.forEach((elem, i) => {
        if(elem.id>5 && elem.id<=8){

            let div = document.createElement("div");
            let img = document.createElement("img");
        img.setAttribute("src", elem.image);
        let name = document.createElement("h4");
        name.innerText = elem.name;
        img.addEventListener("click", function () {
            single_product=elem;
            localStorage.setItem("single-product", JSON.stringify(single_product));
            window.location.assign("single_product.html")
            // singleProduct(elem);
        })
        let div2=document.createElement("div");
        
        let delprice = document.createElement("del");
        delprice.innerText=`₹${elem.delprice}`;
        let price = document.createElement("h3");
        price.innerText =`₹${elem.price}`;
        
        let addToCart= document.createElement("button");
        addToCart.innerText="Add To Cart";
        addToCart.addEventListener("click", function(){
            for(let i=0;i<cartItme.length;i++){
                if(cartItme[i].id==single_product.id){
                    alert("Product Already In Your Cart");
                    return;
                }
            }
            cartItme.push({...single_product,quantity:1});
            localStorage.setItem("cart-item",JSON.stringify(cartItme));
        })
        div2.append(delprice,price);
        div.append(img, name, div2,addToCart);
        document.querySelector("#bestsell-div").append(div)
    }
    if(elem.id>8 && elem.id<=14){
        let div = document.createElement("div");
            let img = document.createElement("img");
        img.setAttribute("src", elem.image);
        let name = document.createElement("h4");
        name.innerText = elem.name;
        img.addEventListener("click", function () {
            single_product=elem;
            localStorage.setItem("single-product", JSON.stringify(single_product));
            window.location.assign("single_product.html")
            // singleProduct(elem);
        })
        let div2=document.createElement("div");
        
        let delprice = document.createElement("del");
        delprice.innerText=`₹${elem.delprice}`;
        let price = document.createElement("h3");
        price.innerText =`₹${elem.price}`;
        
        let addToCart= document.createElement("button");
        addToCart.innerText="Add To Cart";
        addToCart.addEventListener("click", function(){
            for(let i=0;i<cartItme.length;i++){
                if(cartItme[i].id==single_product.id){
                    alert("Product Already In Your Cart");
                    return;
                }
            }
            cartItme.push({...single_product,quantity:1});
            localStorage.setItem("cart-item",JSON.stringify(cartItme));
        })
        div2.append(delprice,price);
        div.append(img, name, div2,addToCart);
        document.querySelector("#newpro").append(div)
    }
    })
}

let men=document.querySelector("#men");
men.addEventListener("click",function(){
    window.location.assign("shop.html")
    let arr=  productArr.filter((elem)=>{
        return elem.brand==="Clothing";
    })
    displayCart(arr);
})
let women=document.querySelector("#Women-Clothing");
women.addEventListener("click",function(){
    window.location.assign("shop.html")

    let arr=  productArr.filter((elem)=>{
        return elem.brand==="Women Clothing";
    })
    displayCart(arr);
})
let bathroom=document.querySelector("#Bathroom-Accessories");
bathroom.addEventListener("click",function(){
    window.location.assign("shop.html")

    let arr=  productArr.filter((elem)=>{
        return elem.brand==="Bathroom Accessories";
    })
    displayCart(arr);
})
let electric=document.querySelector("#Electric-Appliances");
electric.addEventListener("click",function(){
    window.location.assign("shop.html")

    let arr=  productArr.filter((elem)=>{
        return elem.brand==="Electric Appliances";
    })
    displayCart(arr);
})
let health=document.querySelector("#Health-Personal");
health.addEventListener("click",function(){
    window.location.assign("shop.html")

    let arr=  productArr.filter((elem)=>{
        return elem.brand==="Health & Personal Care";
    })
    displayCart(arr);
})
let acc=document.querySelector("#jew");
acc.addEventListener("click",function(){
    window.location.assign("shop.html")
    let arr=  productArr.filter((elem)=>{
        return elem.brand==="Jewellery";
    })
    displayCart(arr);
})

