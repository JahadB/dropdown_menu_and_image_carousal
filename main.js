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

let slideIndex = 1;

function nextSlide(){
    if(slideIndex == 3) {
        slides[slideIndex - 3].removeAttribute("hidden");
        slides[slideIndex - 1].setAttribute("hidden", "true");
        slideIndex = slideIndex - 2;
    }
    else if(slides[slideIndex].getAttribute("hidden") != null){
        slides[slideIndex].removeAttribute("hidden");
        slideIndex++;
        slides[slideIndex - 2].setAttribute("hidden", "true");
    }

    console.log(slideIndex);

}


next.addEventListener("click", nextSlide);


function prevSlide() {
    if(slideIndex == 1) {
        slides[slideIndex + 1].removeAttribute("hidden");
        slides[slideIndex - 1].setAttribute("hidden", "true");
        console.log(slideIndex);
        slideIndex = slideIndex + 2;
    }
    else {
        slides[slideIndex - 2].removeAttribute("hidden");
        slides[slideIndex - 1].setAttribute("hidden", "true");
        slideIndex--;
    }

}

prev.addEventListener("click", prevSlide);