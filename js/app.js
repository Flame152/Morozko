(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const headerBody = document.querySelector("header");
    window.onscroll = function() {
        headerBody.classList.toggle("header-scroll", headerBody.scrollTop > 0 || document.documentElement.scrollTop > 0);
    };
    document.querySelectorAll("a[href^='#scroll']").forEach((link => {
        link.addEventListener("click", (function(e) {
            e.preventDefault();
            let href = this.getAttribute("href").substring(1);
            const scrollTarget = document.getElementById(href);
            const topOffset = 20;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
            window.scrollBy({
                top: offsetPosition,
                behavior: "smooth"
            });
        }));
    }));
    const menuBurger = document.querySelector(".icon-menu");
    const menuNav = document.querySelector(".menu__body");
    const menuBody = document.querySelector("body");
    if (menuBurger) menuBurger.addEventListener("click", (function(e) {
        menuBurger.classList.toggle("menu-open");
        menuNav.classList.toggle("body-active");
        menuBody.classList.toggle("lock");
        if (menuNav) menuNav.addEventListener("click", (function(e) {
            menuBurger.classList.remove("menu-open");
            menuNav.classList.remove("body-active");
            menuBody.classList.remove("lock");
        }));
    }));
    function initSliders() {
        if (document.querySelector(".operation__slider")) new Swiper(".operation__slider", {
            slidesPerView: 1,
            spaceBetween: 150,
            autoHeight: true,
            speed: 800,
            loop: true,
            pagination: {
                el: ".operation-pagination",
                clickable: true
            },
            navigation: {
                prevEl: ".operation-button-prev",
                nextEl: ".operation-button-next"
            },
            breakpoints: {
                320: {
                    spaceBetween: 50
                },
                768: {
                    spaceBetween: 20
                },
                992: {
                    spaceBetween: 100
                },
                1268: {}
            }
        });
    }
    window.addEventListener("load", (function(e) {
        initSliders();
    }));
    document.querySelectorAll(".faq-accordion__question").forEach((el => el.addEventListener("click", (() => {
        let questions__answer = el.nextElementSibling;
        if (questions__answer.style.maxHeight) document.querySelectorAll(".faq-accordion__answet").forEach((el => el.style.maxHeight = null)); else {
            document.querySelectorAll(".faq-accordion__answet").forEach((el => el.style.maxHeight = null));
            questions__answer.style.maxHeight = questions__answer.scrollHeight + "px";
        }
    }))));
    document.querySelectorAll(".faq-accordion__answet").forEach((el => el.addEventListener("click", (() => {
        let questions__answe = el.previousElementSibling;
        if (questions__answe.style.maxHeight) document.querySelectorAll(".faq-accordion__answet").forEach((el => el.style.maxHeight = null)); else {
            document.querySelectorAll(".faq-accordion__answet").forEach((el => el.style.maxHeight = null));
            questions__answe.style.maxHeight = questions__answe.scrollHeight + "px";
        }
    }))));
    document.querySelectorAll(".faq-accordion__question, .faq-accordion__answet").forEach((item => item.addEventListener("click", (() => {
        const parent = item.parentNode;
        if (parent.classList.contains("faq-accordion__card-active")) parent.classList.remove("faq-accordion__card-active"); else {
            document.querySelectorAll(".faq-accordion__card").forEach((child => child.classList.remove("faq-accordion__card-active")));
            parent.classList.add("faq-accordion__card-active");
        }
    }))));
    window["FLS"] = true;
    isWebp();
})();