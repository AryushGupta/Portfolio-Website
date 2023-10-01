// responsive navbar
const navBarExtension = document.getElementById('nav-bar-extension');
const toggleMenu = document.getElementById('toggle-menu');
const aboutSection = document.getElementById('nav-bar-extension-about');

toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle('change');
    navBarExtension.classList.toggle('make-visible');
});

// toggling the hamburger menu when the about section button is clicked
aboutSection.addEventListener('click', () => {
    toggleMenu.classList.toggle('change');
    navBarExtension.classList.toggle('make-visible');
})


// nav-bar backdrop-blur
const navBar = document.getElementById('nav-bar');
function addBackDropBlur() {
    if (window.scrollY > 0) {
        navBar.classList.add('bg-slate-900/75');
        navBar.classList.add('backdrop-blur-lg');
    } else if (window.scrollY === 0) {
        navBar.classList.remove('bg-slate-900/75');
        navBar.classList.remove('backdrop-blur-lg');
    }
}
window.addEventListener('scroll', addBackDropBlur);
addBackDropBlur();


// cursor effect
const words = ['<Developer/>', '{Programmer}'];
let currentIndex = -1;

function typewriter() {
    currentIndex = (currentIndex + 1) % words.length;
    let currWord = words[currentIndex];
    let i = 0;
    const writer = document.getElementById("writer");

    function typeNextChar() {
        if (i < currWord.length) {
            writer.textContent += currWord.charAt(i++);
            setTimeout(typeNextChar, 150);
        } else if (i === currWord.length) {
            i--;
            setTimeout(eraseText, 2000);
        }
    }
    function eraseText() {
        if (i >= 0) {
            writer.textContent = writer.textContent.slice(0, -1);
            i--;
            setTimeout(eraseText, 50);
        } else if (i < 0) {
            typewriter();
        }
    }
    typeNextChar();
}

// calling the typewriter function if the home page is opened otherwise not
if (document.getElementById("writer")) {
    typewriter();
}