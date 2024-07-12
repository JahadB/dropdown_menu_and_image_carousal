//Dropdown Menu

function revealMenu(){
    const menuHidden = document.querySelector(".hidden");
    if(menuHidden.getAttribute("style")==null || 
   menuHidden.getAttribute("style")=="") {
    menuHidden.setAttribute('style', 'display:none')
   }
   else {
        menuHidden.removeAttribute('style');
    };
    
    
}

const btn = document.querySelector('#btn');

btn.addEventListener("click", revealMenu);


//Image Carousal
const slides = document.querySelectorAll(".image-item");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let slideIndex = 0;

let intervalId = 0;

document.addEventListener("DOMContentLoaded", () => {
    slides[slideIndex].removeAttribute("hidden");
})

function nextSlide(){
    if(slideIndex == slides.length - 1) {
        slides[0].removeAttribute("hidden");
        slides[slideIndex].setAttribute("hidden", "true");
        slideIndex = 0;
    }
    else if(slides[slideIndex + 1].getAttribute("hidden") != null){
        slides[slideIndex + 1].removeAttribute("hidden");
        slides[slideIndex].setAttribute("hidden", "true");
        slideIndex++;
    }

    console.log(slideIndex);
}


next.addEventListener("click", () => {
    clearInterval(intervalId);
    nextSlide();
    intervalId = setInterval(nextSlide, 5000);
});


function prevSlide() {
    if(slideIndex == 0) {
        slides[slides.length - 1].removeAttribute("hidden");
        slides[0].setAttribute("hidden", "true");
        slideIndex = slides.length - 1;
    }
    else {
        slides[slideIndex - 1].removeAttribute("hidden");
        slides[slideIndex].setAttribute("hidden", "true");
        slideIndex--;
    }

    console.log(slideIndex);

}

prev.addEventListener("click", () => {
    clearInterval(intervalId);
    prevSlide();
    intervalId = setInterval(nextSlide, 5000);
});


intervalId = setInterval(nextSlide, 5000);

