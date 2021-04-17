const mylinks = document.getElementById('myLinks');
const artifact = document.getElementById('artifact');


function statementFunction() {
    const short = 'Upon starting my doctoral studies, I was sure I was going to be a qualitative researcher. As part of my program of study I started taking quantitative research classes first. After completing my first class I was surprised to find that I had found a strong interest in statistics.'
    const full_short = ` I have found through taking classes in this program that statistics are a useful and valuable tool in research.  The ability to be able to use statistics for research is something that is sought after and rewarding.  Being able to complete statistical analysis for research projects with your peers and students is a skill that I will use to help others develop their own research as well as help work with on my own.`
    const p = document.getElementById('personalstatement');
    const para = document.getElementById('paragraph-two');
    const sButton = document.getElementById('statement-link');
    // IF the 2nd paragraph is showing
    if (para.style.display === "none") {
        para.style.display = 'block';
        p.innerText += full_short;
        sButton.innerHTML = "Show Less..."
    } else {
        para.style.display = 'none'
        p.innerText = short;
        sButton.innerHTML = "Read More..."

    }
}

function navHamburger() {

    if (mylinks.style.display === 'block') {
        mylinks.style.display = 'none';
        artifact.style.display = "none";
    } else {
        mylinks.style.display = 'block';
    }



}

function reportWindowSize() {
    let width = window.innerWidth;
    if (width >= 992) {
        mylinks.style.display = "none";
        artifact.style.display = 'none';

    }
}

window.addEventListener('resize', reportWindowSize);


function artifacts() {
    const artifact = document.getElementById('artifact');

    if (artifact.style.display === 'flex') {
        artifact.style.display = 'none';
    } else {
        artifact.style.display = 'flex'
    }
}