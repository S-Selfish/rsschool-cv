let headerLink = document.querySelectorAll(".header__link");

headerLink.forEach(element => {
    element.addEventListener("mouseover", (event) => {
        let thisWidth = +event.target.offsetWidth + "px";
        event.target.style.setProperty("--before-width-before", thisWidth);
        event.target.style.setProperty("color", "#f0f0f0");
    })
    element.addEventListener("mouseout", (event) => {
        event.target.style.setProperty("--before-width-before", "0px");
        event.target.style.setProperty("color", "inherit");
    })
})

document.addEventListener("scroll", () => {
    if (window.pageYOffset > 79) {
        document.querySelector(".scroll-up-btn").classList.add("scroll-up-btn__active");
    } else {
        document.querySelector(".scroll-up-btn").classList.remove("scroll-up-btn__active");
        
    }
})

document.querySelector(".scroll-up-btn").addEventListener("click", () => {
    window.scrollTo(0,0);
})