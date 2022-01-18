document.getElementById("1").addEventListener("click", function(){
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
}