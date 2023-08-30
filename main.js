alert("Not suitable for touchscreen devices\n\nThis app is best used on a computer with a keyboard");

//*********** Functions for keyboard use *****************/

document.addEventListener('keydown', function (event){
    console.log(event);
    console.log(`${event.code} was pressed`);
    const audio = document.querySelector(`audio[class="${event.code}"]`);  
    audio.currentTime= 0; //rewinds audio to start
    audio.play();
    const key = document.getElementById(event.code).classList.add('playing'); 
    if(!audio) return; 
});
  
document.addEventListener('keyup', function (event){
    if (document.getElementById(event.code) === null) return;
    const key = document.getElementById(event.code).classList.remove('playing');
});



//*********** Functions for mouse click use *****************/

document.addEventListener('mousedown', function (event){
    console.log(event);
    console.log(`${event.target.id} was pressed`);
    const audio = document.querySelector(`audio[class="${event.target.id}"]`);  
    if(!audio) return;
    audio.currentTime= 0; //rewinds audio to start
    audio.play();
    const key = document.getElementById(event.target.id).classList.add('playing');  
});

document.addEventListener('mouseup', function (event){
    if (document.getElementById(event.target.id) === null) return;
    const key = document.getElementById(event.target.id).classList.remove('playing');
});


//*********** Functions for touch screen use ******** commented out below is because of an issue of double sound *********/

document.addEventListener('touchstart', function (event){
    // console.log(event);
    // console.log(`${event.target.id} was pressed`);
    // const audio = document.querySelector(`audio[class="${event.target.id}"]`);  
    // if(!audio) return;
    // audio.currentTime= 0; //rewinds audio to start
    // audio.play();
    const key = document.getElementById(event.target.id).classList.add('playing');  
});

document.addEventListener('touchend', function (event){
    if (document.getElementById(event.target.id) === null) return;
    const key = document.getElementById(event.target.id).classList.remove('playing');
});
