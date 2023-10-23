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
       letter.style.borderColor =   "#FFA600";
        e.preventDefault();
    })

    letter.addEventListener("drop", function(){
      // letter.style.background =  drag;
       letter.style.borderColor =   drag;
    })
})

//////////////////////////swiper letters
const tabs = document.querySelectorAll('.tab');
const preButton = document.getElementById('pre');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function showLetter(index) {
    tabs.forEach((tab, i) => {
        const offset = i - index;
        tab.style.transform = `translateX(${offset * 120}px)`; // Ajustez la valeur de translation selon vos besoins
    });
}

preButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showLetter(currentIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < tabs.length - 1) {
        currentIndex++;
        showLetter(currentIndex);
    }
});

showLetter(currentIndex);
