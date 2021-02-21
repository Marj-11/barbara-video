
// Hamburger---and---Modal-burger----------------------------
const burger = document.querySelector('.icon');
const hamburger = document.querySelector('.hamburger');
const drawer = document.querySelector('.drawer');
const ul = document.querySelector('.drawer ul');
const modal = document.querySelector('.modal');
burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    if (burger.classList.contains('active')) {
        openNav();
    } else {
        closeNav();
    }
});


let eventsArray = ['click', 'touchstart', 'touchend'];

eventsArray.forEach(function (event) {
    window.addEventListener(
        event,
        function (e) {
            if (e.target !== burger && e.target !== hamburger && e.target !== drawer) {
                closeNav();
            }
        },
        false
    );
});

// -------------------------Drawer---------------------------------

function openNav() {
    modal.style.display = 'block';
    drawer.style.width = "200px";
    ul.style.right = "40px";
}

function closeNav() {
    drawer.style.width = "0";
    ul.style.right = "-140px";
    modal.style.display = 'none';
    burger.classList.remove('active');
}