let meter = 0;
let count = 0;
let rand = Math.random()*50;
let step = 500;
const hideMe = document.getElementById('hideMe');
const score = document.getElementById('score');
const objct = document.querySelector('.objct');
const popup = document.querySelector('.popup');
const big = document.querySelector('.big');
const movable = document.querySelector('.movable');
const buttons = document.querySelectorAll('.buttons input');

buttons.forEach(btn=>{
    btn.addEventListener('click', e=>{
        let press = e.target.value;
        if (press == 'replay') {
            window.location.reload();
            hideMe.style.display = 'block';
        };
        if (press == 'up') {

            for(var i = 0; i < 90; i++){
                count++;
                objct.style.bottom = count + "px";
            }
            setTimeout(()=>{
                for(var i = 0; i < 90; i++){
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
                    movable.style.left = step + "px";
                    meter++;
                    score.innerHTML = meter;
                    if (step == 100 && count < rand) {
                        clearInterval(move);
                        setTimeout(()=>{
                           popup.style.position = 'absolute';
                           popup.style.display = 'block';
                           popup.style.width = '100%';
                           popup.style.height = '100%';
                           popup.style.background = 'pink';
                       },300)
                    }
                    if(step == -5) {
                        movable.style.height = rand + 45 + "px";
                        step = 500;
                        movable.style.right = "0";
                        // clearInterval(move);
                    }
                },1);
            }
        }
    });
});


