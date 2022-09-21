const slider = document.querySelector(".clients-body");
let btns = Array.from(document.querySelectorAll('.btns .btn'))


let isDown = false;
let startX;
let scrollLeft;

function sliderScroll(){

    slider.addEventListener("mousedown", (eo) => {
        isDown = true;
      
        slider.classList.add("active");
      
        startX = eo.pageX - slider.offsetLeft;
      
        scrollLeft = slider.scrollLeft;
      });
      
      slider.addEventListener("mouseleave", (eo) => {
        isDown = false;
      
        slider.classList.remove("active");
      });
      
      slider.addEventListener("mouseup", (eo) => {
        isDown = false;
        slider.classList.remove("active");
      });
      
      slider.addEventListener("mousemove", (eo) => {
        if (!isDown) return;
      
        eo.preventDefault();
      
        const x = eo.pageX - slider.offsetLeft;
      
        const walk = (x - startX);
      
        slider.scrollLeft = scrollLeft - walk;
      
          if(slider.scrollLeft >= 184.5){
              btns[1].classList.add('active')
              btns[0].classList.remove('active');
          }else{
            btns[1].classList.remove('active')
            btns[0].classList.add('active');
        }
      
      
        
      });
}

sliderScroll();

// =====================================================================================================
let btnsParent = document.querySelector('.btns');

let persons = Array.from(document.querySelectorAll('.person'));
let personsParent = document.querySelector('.clients-ideas')

document.addEventListener('click',(eo) => {

    if(eo.target.classList.contains('btn')){
        btns.forEach(btn => {
                btn.classList.remove('active');
            });
            eo.target.classList.add('active');       
    }
})


let y = 1;
btns[0].addEventListener('click', (eo) => {



    if(screen.availWidth >=992){
        slider.scroll({
        left:0,
        behavior:"smooth"
        })
        console.log(slider.scrollLeft);
    }
    else{
        slider.scrollBy({
            left:(screen.availWidth) * (-1),
            behavior:'smooth'
        })
       
    }
    
})


let ideas = document.querySelector('.clients-ideas');

let x = 1;
btns[1].addEventListener('click', (eo) => {




    if(screen.availWidth >=992){
        slider.scrollBy({
        left:390,
        behavior:"smooth"
        })
    }

    else{
        slider.scrollBy({
            left:screen.availWidth,
            behavior:'smooth'

        })

    }  
})
// ================nav icon==================================================
// ================nav icon==================================================
// ================nav icon==================================================

let navIcon = document.querySelector('.nav-icon');
let topBar = document.querySelector('.top-bar');

navIcon.addEventListener('click',(eo) => {
        topBar.classList.toggle('fit');
        navIcon.classList.toggle('outline')
    
})
// ========== scroll button ===========================================
// ========== scroll button ===========================================
let scrollBtn = document.querySelector('.top-scroller');


window.onscroll = () =>{
    if(scrollY >= 101.33333){
        scrollBtn.style.opacity = 1;

        scrollBtn.classList.remove('not-active');

    }
    else{
        scrollBtn.style.opacity = 0;

        scrollBtn.classList.add('not-active');
  
 
    }
}


scrollBtn.onclick = function (){
    scroll({
        top:0,
        left:0,
        behavior:'smooth'
    })

    
}









