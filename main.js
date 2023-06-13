 const header = document.getElementById('header')


 window.onscroll = () => {
   if (
     document.body.scrollTop >= 540 ||
     document.documentElement.scrollTop >= 540
   ) {
     header.classList.add('scroll')
    
   } else {
     header.classList.remove('scroll')
     
   } if (document.body.scrollTop >= 2620 ||
     document.documentElement.scrollTop >= 2620){
       header.classList.remove('scroll')
   } 
   
 }


// reveal

window.sr = ScrollReveal({ reset: true });

sr.reveal('.reveal', { duration: 2000 });

// Sticky menu background

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
      document.querySelector(".header").style.opacity = 0.9;
  } else {
      document.querySelector(".header").style.opacity = 1;
  }
});
