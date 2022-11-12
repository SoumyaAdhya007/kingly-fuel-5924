let single_product = JSON.parse(localStorage.getItem("single-product"));
let cartItme=JSON.parse(localStorage.getItem("cart-item"))|| [];
let wishlistItem=JSON.parse(localStorage.getItem("wishlist-item"))|| []
displayCart(single_product)
function displayCart(single_product) {
    // out.forEach((elem, i) => {
        let div = document.createElement("div");
        let div_img= document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", single_product.img);
        let name = document.createElement("h4");
        name.innerText = single_product.name;
        let price = document.createElement("h3");
        price.innerText = single_product.price;
        let description = document.createElement("p");
        description.innerText = single_product.description;
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
        let wishlist=document.createElement("button");
        wishlist.innerText="Add To Wishlist";
        wishlist.addEventListener("click", function(){
            for(let i=0;i<wishlistItem.length;i++){
                if(wishlistItem[i].id==single_product.id){
                    alert("Product Already In Your Wishlist");
                    return;
                }
            }
            wishlistItem.push(single_product);
            localStorage.setItem("wishlist-item",JSON.stringify(wishlistItem));
        })
        div_img.append(img)
        div.append(name, price, description,addToCart,wishlist);
        document.querySelector("#single-product").append(div_img, div)
    // })
}
