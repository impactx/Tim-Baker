const mylinks = document.getElementById('myLinks');
const artifact = document.getElementById('artifact');

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