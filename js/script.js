const ck = document.getElementById("checkbox");
const label = document.querySelector(".label");
const ball = document.querySelector(".ball");
const navWrapper = document.querySelector(".nav");
const topWave = document.querySelector(".top-wave");
const bottomWave = document.querySelector(".bottom-wave");
const main = document.querySelector(".main");
const about = document.querySelector(".about-heading");
const aboutWrapper = document.querySelector(".about");
ck.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    label.classList.toggle("light");
    ball.classList.toggle("dark");
    main.classList.toggle("dark");
    navWrapper.classList.toggle("dark");
    aboutWrapper.classList.toggle("dark");
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
const tl = gsap.timeline();

gsap.registerPlugin(ScrollTrigger);
gsap.to(about, {
    opacity: 1,
    ease: Power2.easeIn,
    top: 0,
    scrollTrigger: {
        trigger: aboutWrapper,
        start: 'top center',
    },  
    duration: 0.5,
})

const animate = (ele, del) => {
    gsap.to(ele, {
        opacity: 1,
        ease: Power2.easeIn,
        top: 0,
        scrollTrigger: {
            trigger: about,
            start: 'top center',
        },  
        duration: 0.5,
        delay: del
    });
}
animate(".fa-quidditch", 0.5);
animate(".fa-server", 0.7);
animate(".fa-hands-helping", 0.9);
animate("#skill-1", 0.6)
animate("#skill-2", 0.8)
animate("#skill-3", 1)