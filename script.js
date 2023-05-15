let angleUp = document.querySelector(".angleup");

window.onscroll = function () {
    // if (this.scrollY >= 1000) {
    //     angleUp.classList.add("show");
    // } else {
    //     angleUp.classList.remove("show");
    // }
    this.scrollY >= 1000 ? angleUp.classList.add("show") : angleUp.classList.remove("show");
}

angleUp.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
