/* Setting the dynamic year displaying in the footer */

const year = new Date()
document.querySelector('.current-year').innerHTML = year.getFullYear()

/* Scroll to top button */
const scrollBtn = document.querySelector('.scroll-to-top');

const refreshBtnVisibility = () => {
    if (document.documentElement.scrollTop <= 150) {
        scrollBtn.style.display = "none";
    } else {
        scrollBtn.style.display = "block";
    }
};
refreshBtnVisibility();
window.scrollTo(0, 1000);
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

document.addEventListener('scroll', (e) => {
    refreshBtnVisibility();
});
