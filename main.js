
const btn = document.querySelector('.header-icon');
const menuMobile = document.querySelector('.ul-header-mobile');
const header = document.querySelector('.ul-header');
const widthDevice = window.innerWidth || document.documentElement.clientWidth;

const rigth = document.getElementById("btn-right");
const left = document.getElementById("btn-left");

rigth.onclick = () => {
    document.getElementById("skills").scrollLeft += 60;
}

left.onclick = () => {
    document.getElementById("skills").scrollLeft -= 60;
}

function verifyStyles(data) {
    if (window.scrollY > 100 && data > 480) {

        header.style.opacity = 0;
        btn.style.display = 'flex';
        menuMobile.style.display = 'none';

    } else if (data <= 480) {

        header.style.opacity = 0;
        btn.style.display = 'flex';
        menuMobile.style.display = 'none';

    }
    else {

        btn.style.display = 'none';
        header.style.opacity = 1;
        menuMobile.style.display = 'none';
    }
}

verifyStyles(widthDevice);

btn.addEventListener('click', () => {
    const widthDevice = window.innerWidth || document.documentElement.clientWidth;

    if (widthDevice <= 480 && menuMobile.style.display == 'none') {

        menuMobile.style.display = 'flex';
        menuMobile.style.animation = "openMenu 500ms ease-in";

    } else {
        moveEnter();
        menuMobile.style.animation = "closeMenu 600ms ease-out";

        setTimeout(() => {
            menuMobile.style.display = 'none';
        }, 500);
    }

})

window.addEventListener('scroll', function () {
    var widthDevice = window.innerWidth || document.documentElement.clientWidth;

    verifyStyles(widthDevice);

});


window.addEventListener('resize', function () {
    var widthDevice = window.innerWidth || document.documentElement.clientWidth;

    verifyStyles(widthDevice);
})


function moveEnter() {
    var widthDevice = window.innerWidth || document.documentElement.clientWidth;
    if (widthDevice > 480) {

        header.style.opacity = 1;
        btn.style.display = 'none';
        menuMobile.style.display = 'none';

    } else {

        header.style.opacity = 0;
        btn.style.display = 'flex';
    }
}
