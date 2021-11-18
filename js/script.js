const ck = document.getElementById("checkbox");
const label = document.querySelector(".label");
const ball = document.querySelector(".ball");
const navWrapper = document.querySelector(".nav");
const topWave = document.querySelector(".top-wave");
const bottomWave = document.querySelector(".bottom-wave");
const main = document.querySelector(".main");
const about = document.querySelector(".about-heading");
const aboutWrapper = document.querySelector(".about");
const upWrapper = document.getElementById("up-wrapper");
const skills = document.querySelector(".skills");
const scrollUp = () => {
    window.scrollTo(0, 0);
}

ck.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    label.classList.toggle("light");
    ball.classList.toggle("dark");
    main.classList.toggle("dark");
    navWrapper.classList.toggle("dark");
    aboutWrapper.classList.toggle("dark");
    console.log(aboutWrapper.classList);
    upWrapper.classList.toggle("dark");
    skills.classList.toggle("dark");
    // if (bottomWave.getAttribute("fill") === "#404040"){
    //     bottomWave.setAttribute("fill", "#0099ff");
    // }
    // else {
    //     bottomWave.setAttribute("fill", "#404040");
    // }
    if (topWave.getAttribute("fill") === "#404040") {
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

const animateSkills = (ele, del) => {
    gsap.to(ele, {
        opacity: 1,
        ease: Power2.easeIn,
        top: 0,
        scrollTrigger: {
            trigger: skills,
            start: 'top center',
        },
        duration: 0.5,
        delay: del
    });
}

gsap.to("#up-wrapper", {
    scrollTrigger: {
        trigger: main,
        start: 'bottom center',
        toggleActions: 'play none none reverse'
    },
    display: 'flex',
    opacity: 1,
    bottom: 30,
    duration: 0.3
})
animate(".fa-quidditch", 0.5);
animate(".fa-server", 0.7);
animate(".fa-hands-helping", 0.9);
animate("#skill-1", 0.6)
animate("#skill-2", 0.8)
animate("#skill-3", 1)
animate('#a-i1', 0.5);
animate('#a-i2', 1.1);
animate('#a-i3', 1.7);
animateSkills("#card1", 0.2);
animateSkills("#card2", 0.4);
animateSkills("#card3", 0.6);
animateSkills("#card4", 0.8);
animateSkills("#card5", 1.2);
animateSkills("#card6", 1.4);
animateSkills("#card7", 1.6);
animateSkills("#card8", 1.8);

gsap.to('.tmt-project', {

    scrollTrigger: {
        scrub: 0.1,
        trigger: '.projects',
        start: 'top center',
        end: 'top 30vh',
    },
    opacity: 1,
    top: "0px",
    width: "500px",
    left: "0px",
    right: "0px",
    duration: 0.4
})
gsap.to('.projects2', {
    scrollTrigger: {
        scrub: 0.1,
        trigger: '.row-2',
        start: 'top center',
        end: 'top 30vh',
    },
    opacity: 1,
    top: "0px",
    left: "0px",
    right: "0px",
    duration: 0.4
})
