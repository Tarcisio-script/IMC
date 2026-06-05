 const slideIds = ['slide1', 'slide2', 'slide3'];
let current = 0;
let timer = null;
 
function goTo(index) {
    current = index;
    document.getElementById(slideIds[current]).checked = true;
}
 
function nextSlide() {
    goTo((current + 1) % slideIds.length);
}
 
function startAutoplay() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 3000);
}
 
// Ao clicar num dot: vai para o slide e reinicia o timer
document.querySelectorAll('.navigation label').forEach((label, i) => {
    label.addEventListener('click', () => {
        goTo(i);
        startAutoplay();
    });
});
 
startAutoplay();