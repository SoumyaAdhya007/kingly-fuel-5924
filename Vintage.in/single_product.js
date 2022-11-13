let single_product = JSON.parse(localStorage.getItem("single-product"));
let cartItme=JSON.parse(localStorage.getItem("cart-item"))|| [];
let wishlistItem=JSON.parse(localStorage.getItem("wishlist-item"))|| []
displayCart(single_product)
function displayCart(single_product) {
    // out.forEach((elem, i) => {
        let div = document.createElement("div");

        let div_img= document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", single_product.image);

        div_img.append(img)

        let name = document.createElement("h1");
        name.innerText = single_product.name;
    let brand=document.createElement("p");
    brand.innerText=single_product.brand;

        let div_price=document.createElement("div");
        let delPrice= document.createElement("del");
        delPrice.innerText=`₹${single_product.delprice}`;
        let price = document.createElement("h2");
        price.innerText = `₹${single_product.price}`;
        let p= document.createElement("h3");
        p.innerText="Price:"

        div_price.append(p,price,delPrice)

    let size= document.createElement("select");
    let selectSize=document.createElement("option");
    selectSize.innerText="Select Size"
    if(single_product.size.length>=1){
        
        let size1=document.createElement("option");
        size1.innerText=single_product.size[0];
        let size2=document.createElement("option");
        size2.innerText=single_product.size[1];
        let size3=document.createElement("option");
        size3.innerText=single_product.size[2];
        size.append(selectSize,size1,size2,size3);
        
    }
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
        
        document.querySelector("#single-product").append(div_img, div);
        // let div_des= document.createElement("div");
        div.append(brand,name, div_price,size, addToCart,wishlist);
        let description = document.createElement("p");
        for(let i=0;i< single_product.description.length;i++){
            description.innerText = single_product.description;
            document.querySelector("#description").append(description);
            // div
        }
    // })
}
