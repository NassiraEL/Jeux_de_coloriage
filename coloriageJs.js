let clr = document.getElementById("clr");
let letters = document.querySelectorAll(".letter");
let drag = null;

clr.addEventListener("dragstart", function(){
    drag = clr.value;
})

clr.addEventListener("dragend", function(){
    drag = null;
})

letters.forEach(letter=>{
    letter.addEventListener("dragover", function(e){
       // letter.style.background =  drag;
       letter.style.borderColor =   drag;
        e.preventDefault();
    })
    letter.addEventListener("dragleave", function(e){
       // letter.style.background =  "#fff";
       letter.style.borderColor =   "black";
        e.preventDefault();
    })

    letter.addEventListener("drop", function(){
      // letter.style.background =  drag;
       letter.style.borderColor =   drag;
    })
})