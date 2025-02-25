//change nav bar styles on scroll

window.addEventListener('scroll', ()=> {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0)
});