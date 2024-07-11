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