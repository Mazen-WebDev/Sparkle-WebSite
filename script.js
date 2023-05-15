let angleUp = document.querySelector(".angleup");

let box2 = document.querySelector(".box2");
let span = document.querySelectorAll(".prog span");

let nums = document.querySelectorAll(".fi-box .num");
let smallBox = document.querySelector(".small-box");
let start = false;

window.onscroll = function () {
    // if (this.scrollY >= 1000) {
    //     angleUp.classList.add("show");
    // } else {
    //     angleUp.classList.remove("show");
    // }
    this.scrollY >= 1000 ? angleUp.classList.add("show") : angleUp.classList.remove("show");
    if (window.scrollY >= smallBox.offsetTop - 450) {
        if (!start) {
            nums.forEach((num) => startCount(num));
        }
        start = true;
    }

    if (window.scrollY >= box2.offsetTop - 400) {
        span.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
}

angleUp.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function startCount(e) {
    let goal = e.dataset.goal;
    let count = setInterval(() => {
        e.textContent++;
        if (e.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}
