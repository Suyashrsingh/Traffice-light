const lights = document.querySelectorAll('.light');
let currentIndex = 0;

function changeLight() {
    lights.forEach(light => light.classList.remove('active'));
    lights[currentIndex].classList.add('active');
    currentIndex = (currentIndex + 1) % lights.length;
}
lights.forEach(light => light.classList.remove('active'));
lights[0].classList.add('active');
setInterval(changeLight, 1000); 

