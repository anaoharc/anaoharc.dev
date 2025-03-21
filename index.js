window.addEventListener('scroll', function () {
    const hero = document.getElementById('hero');
    const scrollPosition = window.scrollY;
  
    // Calculate opacity for the background image
    const opacity = Math.max(0, 1 - scrollPosition / 900); // Adjust 500 for effect speed
  
    // Apply a transparent gradient overlay to the background
    hero.style.background = `linear-gradient(rgba(51, 61, 41, ${1 - opacity}), rgba(51, 61, 41, ${1 - opacity})), url('img/hero.png')`;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';
    hero.style.backgroundRepeat = 'no-repeat';
  });

/** project info */
'use strict';
const projects = [
    {
        id: 1,
        projname: "Mobile Photo API Integration",
        skills: "React Native, JavaScript, Python",
        link: "https://info.runsignup.com/2025/02/25/new-mobile-timing-app-photo-capture-integration/",
        img: "img/runsignup_sweng_app.png",
        description: "A mobile application created for endurance company RunSignUp to integrate with their existing technologies.",
        prompt: "VIEW ARTICLE"
    },
    {
        id: 2,
        projname: "Rowan University ADDP Portal",
        skills: "HTML, CSS, JavaScript, Bootstrap, PHP, MySQL",
        link: "https://rucsm.org/cs/addp_portal/",
        img: "img/addp_portal.png",
        description: "A web application developed for the Rowan University Computer Science Department to manage applications for the Accelerated Dual Degree Program (ADDP) for graduate students.",
        prompt: "OPEN IN BROWSER"
    },
    {
        id: 3,
        projname: "Bodymorph",
        skills: "Figma, UI/UX Design",
        link: "./other/Bodymorph.pdf",
        img: "img/bodymorph.png",
        description: "A UI/UX design project for a mobile application that allows users to track their workout routines and nutritional intake.",
        prompt: "VIEW DESIGN"
    },
    {
        id: 4,
        projname: "Instant Password Generator",
        skills: "HTML, CSS, JavaScript",
        link: "https://anaoharc.github.io/Instant-Password-Generator/",
        img: "img/ipgpic.png",
        description: "A simple website that generates secure passwords with your choice of password criteria and length.",
        prompt: "OPEN IN BROWSER"
    },
    {
        id: 5,
        projname: "The Odin Project Repositories",
        skills: "HTML, CSS",
        link: "https://github.com/orgs/anaoharc-top/repositories",
        img: "img/toplogo.png",
        description: "A collection of repositories for projects I have completed as part of The Odin Project.",
        prompt: "VIEW PROJECTS"
    },

]
const id = document.querySelector("#id");
const total = document.querySelector("#total");
const img = document.querySelector("#proj-img");
const projname = document.querySelector("#name");
const skills = document.querySelector("#skills");
const description = document.querySelector("#description");
const link = document.querySelector("#project-link");
const prompt = document.querySelector("#prompt");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let curItem = 0;    //starting item
window.addEventListener("click", showProject(curItem))
function showProject(project) {
    const item = projects[curItem];
    img.src = item.img;
    link.href = item.link;
    id.textContent = item.id;
    total.textContent = projects.length;
    projname.textContent = item.projname;
    skills.textContent = item.skills;
    description.textContent = item.description;
    prompt.textContent = item.prompt;
}

nextBtn.addEventListener("click", function() {
    curItem++;
    if(curItem > projects.length - 1) {
        curItem = 0;
    }
    showProject(curItem);
})
prevBtn.addEventListener("click", function() {
    curItem--;
    if(curItem < 0) {
        curItem = projects.length - 1;
    }
    showProject(curItem);
})

// "disable" buttons
function disableBtnStyle() {
    const disableStyles = `
    color: #fff;
    transition: none;
    cursor: default;`;
    prevBtn.style.cssText = disableStyles;
    nextBtn.style.cssText = disableStyles;
}
if(projects.length - 1 < 1) {
    disableBtnStyle();
}