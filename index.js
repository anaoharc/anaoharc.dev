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