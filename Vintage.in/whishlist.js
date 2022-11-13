
let wishlistItem=JSON.parse(localStorage.getItem("wishlist-item"));
displayCart(wishlistItem)
function displayCart(wishlistItem) {
    document.querySelector("#wishlist").innerText="";
    wishlistItem.forEach((elem, i) => {
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
        let remove= document.createElement("button");
        remove.innerText="Remove from whishlist";
        remove.addEventListener("click",function(){
            removeCart(elem,i)
        })
        div2.append(delprice,price);
        div.append(img, name, div2,remove);
        document.querySelector("#wishlist").append(div)
    })
}
function removeCart(elem,i){
    wishlistItem.splice(i,1);
    localStorage.setItem("wishlist-item",JSON.stringify(wishlistItem));
    displayCart(wishlistItem)
}