
const buttonDaftarDiri = document.querySelector(".right-button");
const popup = document.querySelector(".popup");
const wrapper = document.querySelector(".wrapper");
const closeButton = document.querySelector(".close-button");

buttonDaftarDiri.addEventListener("click", () => {
    popup.classList.add("active");
    popup.style.display = "flex";
    wrapper.style.opacity = ".5";
    buttonDaftarDiri.style.border = '1px rgb(0, 153, 255) solid'
    buttonDaftarDiri.style.color = 'rgb(0, 153, 255)'
});

closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    popup.style.display = "none";
    wrapper.style.opacity = "1";
    buttonDaftarDiri.style.border = '1px black solid'
    buttonDaftarDiri.style.color = 'black'
});
