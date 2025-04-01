const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1500;
canvas.height = 900;


const frameCount = 64;
const images = [];
const airpods =  {
    frame : 0
}

const currentIndex = (index) => (
    `https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large/${(index + 1).toString().padStart(4, '0')}.png`
);

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentIndex(i);
    images.push(img);
}

function render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(images[airpods.frame], 0, 0);
}

images[0].onload = render;


gsap.to(airpods, {
    frame: frameCount - 1,
    ease : "none",
    snap : "frame",
    scrollTrigger: {
        scrub: 0.5,
    },
    onUpdate : render
});