var id=0;
var zdjecia = document.querySelectorAll('#imgs img');
var memy = document.getElementById('imgs');
function slider() {
    id++;
    if(id>=zdjecia.length) {
        id=0;
    }
    memy.style.transform=`translateX(${-id*500}px)`;
}
setInterval(slider,2000);

