// let shopArr=[];
let url="https://636d06acab4814f2b2763c86.mockapi.io/vintage";
let productArr=[]
async function product(){
    try{
        let res= await fetch(url);
        let out= await res.json();
 productArr=out;
        console.log(productArr)
        display(out)
    }
    catch(err){
        alert(err);
    }
}
product()

function display(out){
    productArr.forEach((elem,i)=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",elem.avatar);
        let name= document.createElement("h4");
        name.innerText=elem.name;
        let price= document.createElement("p");
           price.innerText=elem.price;
        let description= document.createElement("p");
        description.innerText=elem.description;
        let colour= document.createElement("p");
        colour.innerText=elem.colour;
        div.append(img,name,price,colour,description);
        document.querySelector("#products").append(div)
    })
}