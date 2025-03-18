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

/** link functions */
function resumelnk() {
    window.open("oharciuc-resume.pdf", "_blank");
}
function linkedinlnk() {
    window.open("https://www.linkedin.com/in/anaoharciuc/", "_blank");
}

/** experience tabs */
function openTab(evt, tabName) {
    var i, tabcontent, tabbtn;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tabbtn = document.getElementsByClassName("tabbtn");
    for (i = 0; i < tabbtn.length; i++) {
        tabbtn[i].className = tabbtn[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

/** project info */
'use strict';
const projects = [
    {
        id: 1,
        projname: "Instant Password Generator",
        skills: "HTML, CSS, JavaScript",
        link: "https://anaoharc.github.io/Instant-Password-Generator/",
        img: "img/ipgpic.png",
        description: "A simple website that generates secure passwords with your choice of password criteria and length.",
        prompt: "OPEN IN BROWSER"
    },
    {
        id: 2,
        projname: "The Odin Project Repositories",
        skills: "HTML, CSS",
        link: "https://github.com/orgs/anaoharc-top/repositories",
        img: "img/toplogo.png",
        description: "A collection of repositories for projects I have completed as part of The Odin Project.",
        prompt: "VIEW PROJECTS"
    }
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

/** socials */
function copy(elementId) {
    var el = document.getElementById(elementId);
    el.select();
    el.setSelectionRange(0, el.length);
    navigator.clipboard.writeText(el.value);
    alert("Copied to clipboard!");
}