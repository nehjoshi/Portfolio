const ck = document.getElementById("checkbox");
const label = document.querySelector(".label");
const ball = document.querySelector(".ball");
const navWrapper = document.querySelector(".nav");
const topWave = document.querySelector(".top-wave");
const bottomWave = document.querySelector(".bottom-wave");
const main = document.querySelector(".main");
ck.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    label.classList.toggle("light");
    ball.classList.toggle("dark");
    main.classList.toggle("dark");
    navWrapper.classList.toggle("dark");
    // if (bottomWave.getAttribute("fill") === "#404040"){
    //     bottomWave.setAttribute("fill", "#0099ff");
    // }
    // else {
    //     bottomWave.setAttribute("fill", "#404040");
    // }
    if (topWave.getAttribute("fill") === "#404040"){
        topWave.setAttribute("fill", "#0099ff");
    }
    else {
        console.log("hello!");
        topWave.setAttribute("fill", "#404040");
    }
});
