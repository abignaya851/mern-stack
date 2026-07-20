const products=document.getElementById("products");
async function getProduct(){
    try{
        const response=await fetch("https://fakestoreapi.com/products");
        const data=await response.json();
        data.forEach(product=>{
            const card=document.createElement("div");
            card.className="card";
            card.innerHTML=`
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.price}</p>
            `;
            products.appendChild(card);
        });
    }
    catch(error){
        alert("Something went wrong!");
    }
}
getProduct();