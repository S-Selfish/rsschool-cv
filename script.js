let headerLink = document.querySelectorAll(".header__link");
let activeLine = document.querySelectorAll(".line-active");
let hover = document.querySelectorAll(".hover-h3");

function changeStyleAnimation() {
    activeLine.forEach(element => {
        if (element.style.animation == "1s ease-in-out 0.5s 1 normal forwards running line-animation") {
            element.style.animation = "line-animation-reverse 1s 0s ease-in-out forwards";
        }
    })
}

const load = {
    functionality: () => {
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


            element.addEventListener("click", (event) => {
                event = element.getAttribute("href").substr(1);

                document.getElementById(event).childNodes[3].lastElementChild.style.animation = "1s ease-in-out 0.5s 1 normal forwards running line-animation";

                console.log(document.getElementById(event).childNodes[3].lastElementChild);

                setTimeout(changeStyleAnimation, 2000)
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
            window.scrollTo(0, 0);
        })
    },
}

load.functionality();



