/*document.getElementById("1").addEventListener("click", function(){
    this.innerHTML="Check!";
});

document.getElementById("2").addEventListener("mouseover", function(){
    this.innerHTML="ok";
})

document.getElementById("3").addEventListener("mouseout", function(){
    this.innerHTML="Hello!";
})

document.getElementById("4").addEventListener("focus", function(){
    this.style.backgroundColor = "yellow";
})

function Hello(){
    alert("Hello");
} */

//define product array
const products = [
    "This is info for product 1",
    "This is info for product 2",
    "This is infor for product 3"
]




//Store Document modal in a variable 
//access modal using document.getById
var infoModal = new bootstrap.Modal(document.getElementById("Main-Info"));

//used to attatch event listener to a SINGLE button
/*
document.getElementById("info-btn").addEventListener("click", function(e){
    console.log(e);
    document.getElementById("modal-data").innerHTML = products[0]; //grabs the first value in the array from products and  places it in the p tag modal-data in the modal
    infoModal.show();
})*/

//how to grab all classes with 'more-info'
//var items = document.getElementsByClassName(more-info);
var items = document.querySelectorAll(".more-info");
console.log(items);
//attatch event listener to every button found with the more-info class
items.forEach(item =>{
    item.addEventListener("click", function(e){
        console.log(e.target.id);
        document.getElementById("modal-data").innerHTML = products[e.target.id];
        infoModal.show();
    })
});





var cartModal = new bootstrap.Modal(document.getElementById("cart-info"));
var cart = document.querySelectorAll(".open-cart");
cart.forEach(item =>{
    item.addEventListener("click", function(e){
        console.log(e.target.id);
        document.getElementById("cart-data").innerHTML = "Your Cart"; 
        cartModal.show();
    })
    
});

