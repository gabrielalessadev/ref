const header = document.getElementById('header')
const logo = document.querySelector('.logo')

window.onscroll = () => {
  if (
    document.body.scrollTop > 1850 ||
    document.documentElement.scrollTop > 1850
  ) {
    header.classList.add('dark')
    logo.classList.add('dark-logo')
  } else {
    header.classList.remove('dark')
    logo.classList.remove('dark-logo')
  } if(document.body.scrollTop > 3000 ||
    document.documentElement.scrollTop > 3000){
      header.classList.remove('dark')
      logo.classList.remove('dark-logo')
  }
}

// reveal

window.sr = ScrollReveal({ reset: true });

sr.reveal('.reveal', { duration: 2000 });
aaaa