
let productArr = [];
let url = "https://636f6e75bb9cf402c8178107.mockapi.io/vintage";
async function product() {
    try {

        let res = await fetch(url);
        let out = await res.json();
        productArr = [...out];
        // console.log(productArr)
        productArr.push(out);
        displayCart(out)
    }
    catch (err) {
        alert(err);
    }
}
let men=document.querySelector("#Men-Clothing");
men.addEventListener("click",function(){

    let arr=  productArr.filter((elem)=>{
        return elem.brand==="Clothing";
    })
    displayCart(arr);
})
let women=document.querySelector("#Women-Clothing");
women.addEventListener("click",function(){

    let arr=  productArr.filter((elem)=>{
        return elem.brand==="Women Clothing";
    })
    displayCart(arr);
})
let bathroom=document.querySelector("#Bathroom-Accessories");
bathroom.addEventListener("click",function(){

    let arr=  productArr.filter((elem)=>{
        return elem.brand==="Bathroom Accessories";
    })
    displayCart(arr);
})
let electric=document.querySelector("#Electric-Appliances");
electric.addEventListener("click",function(){

    let arr=  productArr.filter((elem)=>{
        return elem.brand==="Electric Appliances";
    })
    displayCart(arr);
})
let health=document.querySelector("#Health-Personal");
health.addEventListener("click",function(){

    let arr=  productArr.filter((elem)=>{
        return elem.brand==="Health & Personal Care";
    })
    displayCart(arr);
})
let acc=document.querySelector("#Women-Accessories");
acc.addEventListener("click",function(){

    let arr=  productArr.filter((elem)=>{
        return elem.brand==="Jewellery";
    })
    displayCart(arr);
})


let priceLower= document.querySelector("#lower");
priceLower.addEventListener("click",function(){
    let plowsort=productArr.sort((a,b)=> a.price-b.price);
   let plow= plowsort.filter((elem)=>{
    if(elem.price<=499){
        return elem.price;
    }
   })
    displayCart(plow);
})
let priceMidium= document.querySelector("#midium");
priceMidium.addEventListener("click",function(){
    let plowsort=productArr.sort((a,b)=> a.price-b.price);
   let plow= plowsort.filter((elem)=>{
    if(elem.price>=500  &&elem.price<=999){
        return elem.price;
    }
   })
    displayCart(plow);
})
let priceHigh= document.querySelector("#high");
priceHigh.addEventListener("click",function(){
    let plowsort=productArr.sort((a,b)=> a.price-b.price);
   let plow= plowsort.filter((elem)=>{
    if(elem.price>=1000){
        return elem.price;
    }
   })
    displayCart(plow);
})
let search= document.querySelector("#search");
search.addEventListener("input",productSearch);
function  productSearch(){
    let search_val=document.querySelector("#search").value;
   let newdata= productArr.filter((elem)=>{
        return elem.name.toLowerCase().includes(search_val.toLowerCase())
    })
    displayCart(newdata)
}

product()
let single_product = JSON.parse(localStorage.getItem("single-product")) || [];
function displayCart(out) {
    document.querySelector("#products").innerText="";
    out.forEach((elem, i) => {
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
        div2.append(delprice,price);
        div.append(img, name, div2);
        document.querySelector("#products").append(div)
    })
}



// }

