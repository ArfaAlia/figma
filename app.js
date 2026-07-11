let productContainer = document.getElementById("products");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCart();

function showProducts(items){

productContainer.innerHTML="";

items.forEach(function(product){

productContainer.innerHTML += `

<div class="col-lg-4 col-md-6 mb-4">

<div class="card border-0">

<img src="${product.image}"
class="card-img-top"
style="height:300px;object-fit:contain;background:#f8f8f8;">

<div class="card-body text-center">

<h6>${product.name}</h6>

<div class="text-warning">
★★★★★
</div>

<h5>$${product.price}</h5>

<button
class="btn btn-dark rounded-0"
onclick="addToCart(${product.id})">

Add To Cart

</button>

</div>

</div>

</div>

`;

});

}

showProducts(products);

let search = document.getElementById("search");

if(search){

search.addEventListener("keyup",function(){

let text = search.value.toLowerCase();

let filtered = products.filter(function(product){

return product.name.toLowerCase().includes(text);

});

showProducts(filtered);

});

}

function filterCategory(category){

let filtered = products.filter(function(product){

return product.category==category;

});

showProducts(filtered);

}

function addToCart(id){

let product = products.find(function(item){

return item.id==id;

});

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

updateCart();

alert("Product Added");

}

function updateCart(){

let count = document.getElementById("cart-count");

if(count){

count.innerHTML = cart.length;

}

}