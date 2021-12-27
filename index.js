let road = document.getElementById('road');
let mountain = document.getElementById('mountain');
let sky = document.getElementById('sky');
let moon = document.getElementById('moon');
let midnight = document.getElementById('midnight');

window.addEventListener('scroll', () => {
    let { scrollY } = window;

    road.style.top = 0.5 * scrollY + 'px';
    mountain.style.top = (150 +0.05 * scrollY) + 'px'; 
    moon.style.left = 1.1 * scrollY + 'px';
    sky.style.top = -1.2 * scrollY + 'px';
    midnight.style.top = (120 + -1.5 * scrollY) + 'px';
});