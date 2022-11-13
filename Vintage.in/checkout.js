let cartItme=JSON.parse(localStorage.getItem("cart-item"))||[];
let cartTotal=JSON.parse(localStorage.getItem("cart-total"));

checkCart(cartItme)

let single_product = JSON.parse(localStorage.getItem("single-product")) || [];
function checkCart(cartItme) {
    // document.querySelector("#pro-details").innerText=""

    cartItme.forEach((elem, i) => {

        let name = document.createElement("p");
        name.innerText = elem.name+"     "+"x"+" "+ elem.quantity;
        // name.addEventListener("click", function () {
        //     single_product=elem;
        //     localStorage.setItem("single-product", JSON.stringify(single_product));
        //     window.location.assign("single_product.html")
        //     singleProduct(elem);
        // })
    // let quantity= document.createElement("p");
    // quantity.innerText="x"+" "+elem.quantity;
        let price = document.createElement("h3");
        price.innerText =`₹${elem.price}`;
        document.querySelector("#product-name").append(name)
        // document.querySelector("#quant").append(quantity)
        document.querySelector("#price").append(price)
    })
}
document.querySelector("#total").innerText=`₹${cartTotal}`;
document.querySelector("#btn").addEventListener("click",function(){
    alert("Oder Successful")
})