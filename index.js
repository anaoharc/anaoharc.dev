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
        img: "projimg/ipgpic.png",
        description: "A simple website that generates secure passwords with your choice of password criteria and length."
    }
]
const img = document.querySelector("#proj-img");
const projname = document.querySelector("#name");
const skills = document.querySelector("#skills");
const description = document.querySelector("#description");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let curItem = 0;    //starting item
window.addEventListener("click", function() {
    const item = projects[curItem];
    img.src = item.img;
    projname.textContent = item.projname;
    skills.textContent = item.skills;
    description.textContent = item.description;
})

function showProject(project) {
    const item = projects[curItem];
    src.img = item.img;
    projname.textContent = item.projname;
    skills.textContent = item.skills;
    description.textContent = item.description;
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