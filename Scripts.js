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
//const products = [
    //"This is info for product 1",
    //"This is info for product 2",
    //"This is infor for product 3"
//]

const products = [
    {
        id:1,
        title:"Shoe1",
        img:"img/shoe1.jpg",
        description:"This is shoe product 1",
        price:149.99
    },
    {
        id:2,
        title:"Shoe2",
        img:"img/shoe2.jpg",
        description:"This is shoe product 222222",
        price:79.99
    },
    {
        id:3,
        title:"Shoe3",
        img:"img/shoe3.jpg",
        description:"This is shoe product 3333333333333",
        price:59.99
    }
]

let cart = [1]

//add to cart function when buying products
function AddToCart(){

}
//Update the cart
function UpdateCart(){
    cartHTML = "";
    //add item html to cart
    cartHTML+=  `<div class = "row my-1">
    <div class = "col-2"><img class= "w-100" src="img/shoe1.jpg"></div>
    <div class = "col-4"> Shoe 1</div>
    <div class = "col-2"><input class="w-100" type="number" placeholder="1"></div>
    <div class = "col-2">£49</div>
    <div class = "col-2"><div class="btn btn-danger">X</div>
  </div>`

  return cartHTML;
}




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





var cartModal = new bootstrap.Modal(document.getElementById("cart-modal"));
document.getElementById("cart-btn").addEventListener("click", function(){
    if(cart.length === 0){
        document.getElementById('cart-body').innerHTML="<b>Your cart is empty!</b>"
    }
    else{
        htmlData = UpdateCart()
        document.getElementById('cart-body').innerHTML=htmlData;
    }
    cartModal.show();
})

