let startBox     = document.querySelector(".start-box"); 
let inputCounter = startBox.querySelector("#input-counter");
let startCounter = startBox.querySelector("#start-counter");
let errorElement = document.querySelector("#error-message"); 
let timerCircle  = document.querySelector(".c100");
let timeNum      = document.querySelector(".c100 > span");
let loadinMessage= document.querySelector(".message .loading");  
let successMessage= document.querySelector(".message .success");  

startCounter.addEventListener('click', function(e){

    let seconds = parseInt(inputCounter.value);
    
    if(isNaN(seconds)){
        errorElement.textContent = 'زمان را به درستی وارد کنید';
        errorElement.classList.add('active');
        return;
    }

    errorElement.classList.remove('active');
    startBox.classList.remove('active');
    timerCircle.style.display = "block";
    timeNum.textContent = seconds;
    loadinMessage.style.display = 'block';
    successMessage.style.display = 'none'

    let originalSeconds = seconds; 
    let lastPersent = 'p100';
    let timeId = setInterval(() => {
    
    if(lastPersent) timerCircle.classList.remove(lastPersent);
    if(seconds < 0){
        clearInterval(timeId);
        startBox.classList.add("active");
        timerCircle.style.display = "none";
        loadinMessage.style.display = 'none';
        successMessage.style.display = 'block'
        inputCounter.value = '';
        return;
    }
   
    let persent = Math.abs(Math.floor(((originalSeconds - seconds) / originalSeconds) * 100) - 100);
    lastPersent = `p${persent}`;
    timerCircle.classList.add(`p${persent}`);
    timeNum.textContent = seconds --;
    }, 1000);

});