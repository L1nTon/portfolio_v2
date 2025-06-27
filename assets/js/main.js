const header = document.querySelector("header");

window.onload = function(){
    if(window.innerWidth < 900){
        alert("Откройте через компухтер!!!")
        document.write(";(")
    }
}

window.onscroll = () => {
    if(window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}
document.querySelector('.page-1').addEventListener("mousemove", function(e){
    let imgs = document.querySelectorAll(".img-content img");
    let valX = e.clientX;
    let valY = e.clientY-100;

    imgs.forEach((img, i) => {
        let speed = (i + 1) * 0.05;
        let x = (window.innerWidth / 2 - valX) * speed;
        let y = (window.innerHeight / 2 - valY) * speed;

        img.style.transform = `translate(${x}px, ${y}px)`;
    });
});
document.querySelector('.page-1').addEventListener("mouseleave", function(e){
    let imgs = document.querySelectorAll(".img-content img");
    imgs.forEach(img => {
        img.style.transform = `translate(0px, 0px)`;
    });
});

