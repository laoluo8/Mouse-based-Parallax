const elems = document.querySelectorAll('.laya-please');
const layer2 = document.querySelector('.layer-2');
const layer3 = document.querySelector('.layer-3');
const layer4 = document.querySelector('.layer-4');
const layer5 = document.querySelector('.layer-5');
const layer6 = document.querySelector('.layer-6');
const layer7 = document.querySelector('.layer-7');
const layer8 = document.querySelector('.layer-8');

//setTImeout 一个 function ,它是 windows.setTimeout() 的继承
setTimeout(() => {
    elems.forEach((elem, index) => {
        elem.style.animation = 'none';
    });
}, 1500); 

//three mouse eventlistener
//mousemove
document.body.addEventListener('mousemove', e => {
    if(!e.currentTarget.dataset.triggered){
        elems.forEach((elem, index) => {
            if(elem.getAttribute('style')){
                elem.style.transtion = 'all .5s';
                elem.style.transform = 'none';
            }
        });
    }
    e.currentTarget.dataset.triggered = true;

    let width = window.innerWidth / 2;
    let mouseMoved2 = ((width - e.pageX)/ 50);
    let mouseMoved3 = ((width - e.pageX)/ 40);
    let mouseMoved4 = ((width - e.pageX)/ 30);
    let mouseMoved5 = ((width - e.pageX)/ 20);
    let mouseMoved6 = ((width - e.pageX)/ 10);
    let mouseMoved7 = ((width - e.pageX)/ 5);
    
    layer3.style.transform = "translateX(" + mouseMoved2 + "px)";
    layer4.style.transform = "translateX(" + mouseMoved3 + "px)";
    layer5.style.transform = "translateX(" + mouseMoved4 + "px)";
    layer6.style.transform = "translateX(" + mouseMoved5 + "px)";
    layer7.style.transform = "translateX(" + mouseMoved6 + "px)";
    layer8.style.transform = "translateX(" + mouseMoved7 + "px)";

});


//mouseleave
document.body.addEventListener('mouseleave', e => {
    elems.forEach((elem, index) => {
        elem.style.transtion = 'all .5s';
        elem.style.transform = 'none';
    });
});

//mouseenter
document.body.addEventListener('mouseenter', e => {
    elems.forEach((elem, index) => {
        setTimeout(() => {
            elem.style.transtion = 'none';
        }, 500);
    });
});