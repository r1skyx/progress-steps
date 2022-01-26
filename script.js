const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let counter = 1;
next.addEventListener('click', () => {
    counter++;
    if(counter>circles.length){
        counter=circles.length;
    }
    console.log(counter);
    activate();
})

prev.addEventListener('click', () => {
    counter--;
    if(counter<1){
        counter=1;
    }
    activate();
})

function activate(){
    circles.forEach((circle, index) => {
        if(index<counter){
            circle.classList.add('active');
        }
        else {
            circle.classList.remove('active');
        }
    })
    let actives = document.querySelectorAll('.active').length;
    progress.style.width= (actives-1)/(circles.length-1)*100 + '%';
    if(counter==1){
        prev.disabled=true;
    }
    else if (counter==circles.length){
        next.disabled=true;
    }
    else {
        prev.disabled=false;
        next.disabled=false;
    }
}