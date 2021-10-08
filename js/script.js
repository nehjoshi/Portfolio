const ck = document.getElementById("checkbox");
const label = document.querySelector(".label");
const ball = document.querySelector(".ball");
ck.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    label.classList.toggle("light");
    ball.classList.toggle("dark");
})
