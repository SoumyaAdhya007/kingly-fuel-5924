
let productArr = [];
let url = "https://636d18faab4814f2b2789e43.mockapi.io/vintage";
async function product() {
    try {

        let res = await fetch(url);
        let out = await res.json();
        productArr = [...out];
        displayCart(out)
    }
    catch (err) {
        alert(err);
    }
}
product()
let single_product = JSON.parse(localStorage.getItem("single-product")) || [];
function displayCart(out) {
    out.forEach((elem, i) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", elem.img);
        let name = document.createElement("h4");
        name.innerText = elem.name;
        img.addEventListener("click", function () {
            single_product=elem;
            localStorage.setItem("single-product", JSON.stringify(single_product));
            window.location.assign("single_product.html")
            // singleProduct(elem);
        })
        // let p = document.createElement("h2").innerText = "Price";
        let price = document.createElement("h3");
        price.innerText = elem.price;
        let description = document.createElement("p");
        description.innerText = elem.description;
        
        div.append(img, name, price, description);
        document.querySelector("#products").append(div)
    })
}
// function singleProduct(elem) {

//     // let single_product = JSON.parse(localStorage.getItem("single-product")) || [];
//     // single_product.push(elem);
//     // localStorage.setItem("single-product", JSON.stringify(single_product));
//     // window.location.assign("single_product.html")
//             single_product=elem;
//             localStorage.setItem("single-product", JSON.stringify(single_product));
//             window.location.assign("single_product.html")
//     let div = document.createElement("div");
//     let img = document.createElement("img");
//     img.setAttribute("src", elem.img);
//     let name = document.createElement("h4");
//     // let p = document.createElement("h2").innerText = "Price";
//     let price = document.createElement("h3");
//     price.innerText = elem.price;
//     let description = document.createElement("p");
//     description.innerText = elem.description;
//     div.append(img, name, price, description);
//     // document.querySelector("#products").append(div)
//     document.querySelector("#single-product").append(div);
// }