var list = document.querySelectorAll(".slide")
var next = document.getElementById('next')
var prev = document.getElementById('prev')
var count = list.length;
var active = 0

next.onclick = () => {
    console.log("aaa")
    var activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')
    active = active >= count -1 ? 0 : active + 1

    list[active].classList.add('active')
}

prev.onclick = () =>{
    console.log("aaaaa")
    //lógoca contraria, removemos 1
    var activeOld = document.querySelector('.active')
    active = active <= 0 ? count -1 : active - 1
    activeOld.classList.remove('active');
    list[active].classList.add('active')
} 

window.addEventListener("scroll", function() {
    let image = document.getElementById("carImage");
    let scrollY = window.scrollY; // Captura a posição do scroll
    
    let moveY = Math.min(scrollY * 0.3, 100); // Define limite de descida
    let rotation = Math.min(scrollY * 0.15, 180); // Gira até 180°

    image.style.transform = `translateY(${moveY}px) rotateY(${rotation}deg)`;
    console.log("aaa")
});
