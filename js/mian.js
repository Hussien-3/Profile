let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// when we click on hamburger icon its close 

let navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


let but = document.querySelector(".Hello")


window.onscroll = function () {
    if (window.scrollY >= 600) {
    but.style.display = "block"
}else {
    but.style.display = "none"
}
}

but.onclick = function () {
    window.scrollTo ({
        left:0,
        top:0,
        behavior:"smooth"
    })
}


//======================//======================//======================//======================//=============

let tiltle = document.querySelector(".title")
let h1 = document.querySelector(".title h1")
let card = document.querySelector(".card .imge a")

let y;

let span = document.querySelectorAll(".tog span")
let h = document.querySelector(".card .imge a")

span.forEach((e) => {
    e.addEventListener("click", () => {
        span.forEach((e) => {
            e.classList.remove("active")
        });
        e.classList.add("active")
        y = e.classList[0]

        switch (y) {
                case "span1":
                tiltle.children[3].textContent = "we are leon wep templet"
                tiltle.children[4].textContent = "Leon is the first project css"
                card.children[0].src = "img/Screenshot (271).png"
                h.href = "https://hussien4554856.github.io/leon/"
                h1.innerHTML = "leon"
                break;

                case "span2":
                tiltle.children[3].textContent = "Kasper Art Templet"
                tiltle.children[4].textContent = "Kasper Templet by Grampy"
                card.children[0].src = "img/Screenshot (272).png"
                h.href = "https://hussien4554856.github.io/Kasper/"
                h1.innerHTML = "Kasper"
                break;

                case "span3":
                tiltle.children[3].textContent = "get weather by the city or country"
                tiltle.children[4].textContent = "wather app API"
                card.children[0].src = "img/Screenshot 2025-01-15 005313.png"
                h.href = "https://hussien4554856.github.io/weather-app/"
                h1.innerHTML = "WeatherApp"
                break;

                case "span4":
                tiltle.children[3].textContent = "calc app"
                tiltle.children[4].textContent = "javascript html css"
                card.children[0].src = "img/Screenshot 2025-01-15 011344.png"
                h.href = "https://hussien4554856.github.io/calc/"
                h1.innerHTML = "Calculator"
                break;

                case "span5":
                tiltle.children[3].textContent = "Generat password"
                tiltle.children[4].textContent = "Password Generator Strong"
                card.children[0].src = "img/p.png"
                h.href = "https://hussien4554856.github.io/password-/"
                h1.innerHTML = "Calculator"
                break;
        }
    });
});
