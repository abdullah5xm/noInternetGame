let meter = 0;
let count = 0;
let arr = [];
let rand = Math.random();
const hideMe = document.getElementById('hideMe');
const score = document.getElementById('score');
const objct = document.querySelector('.objct');
const popup = document.querySelector('.popup');
const big = document.querySelector('.big');
const movable = document.querySelector('.movable');
const buttons = document.querySelectorAll('.buttons input');
let step = 99;

buttons.forEach(btn=>{
    btn.addEventListener('click', e=>{
        let press = e.target.value;
        if (press == 'replay') {
            window.location.reload();
            hideMe.style.display = 'block';
        };
        if (press == 'up') {
            for(var i = 0; i < 85; i++){
                count++;
                objct.style.bottom = count + "px";
            }
            setTimeout(()=>{
                for(var i = 0; i < 85; i++){
                    count--;
                    objct.style.bottom = count + "px";
                }
            },400)
        }
        if (press == 'start') {
            if ( popup.style.display == 'block') {
                console.log("its not playing");
            }
            else{
                hideMe.style.display = 'none';
                let move = setInterval(()=>{
                    step--;
                    movable.style.left = step + "%";
                    meter++;
                    score.innerHTML = meter;
                    if (step == 12 && count < 50) {
                        clearInterval(move);
                        setTimeout(()=>{
                         popup.style.position = 'absolute';
                         popup.style.display = 'block';
                         popup.style.width = '100%';
                         popup.style.height = '100%';
                         popup.style.background = 'pink';
                     },1000)
                    }
                    if(step == -5) {
                        movable.style.height = rand + 45 + "px"; 
                        step = 100;
                        movable.style.right = "0";
                        // clearInterval(move);
                    }
                },50);
            }
        }
    });
});


