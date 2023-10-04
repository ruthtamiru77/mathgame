
const leftNumber = document.getElementById("lNumber");
const leftNumberContainer = document.querySelector('.leftNumber');
const rightNumber = document.getElementById("rNumber");
const rightNumberContainer = document.querySelector('.rightNumber')
const answer = document.getElementById("answer");
const output = document.querySelector('.output');
const playerAnswer = document.querySelector('.playerAnswer');
const button = document.querySelector('.button');
const answerInput = document.getElementById("answerInput");
const checkAnswer = document.getElementById("checkAnswer");
const audio = document.getElementById("wrongAudio");
const audio1 = document.getElementById("rightAudio"); 
let firstNumber = Math.floor((Math.random()*20)+10);
let secondNumber = Math.floor(Math.random()*10);
let problem = firstNumber / secondNumber


button.addEventListener('click', function(){
    console.log("clicked");
    checkFormat();
    
    firstNumber = Math.floor((Math.random()*20)+10);
    secondNumber = Math.floor((Math.random()*10)+1);
    problem = (firstNumber / secondNumber).toFixed(2)
    playerAnswer.classList.remove('hidden');
    play();
});

checkAnswer.addEventListener('click', function(){
     
    
    if(isNormalInteger(answerInput.value)){

    }else{
        alert("not a number");
        clearAnswerInputField();
    }
    if(answerInput.value == problem){
        
        playerAnswer.classList.add('hidden');
        output.classList.remove('hidden');
        output.innerHTML = `<h1 id="goodAnswer">${problem}</h1>`;
        audio1.play()
    }else{
        playerAnswer.classList.add('hidden');
        output.classList.remove('hidden');
        output.innerHTML = `<h1 id="badanswer">${problem}</h1>`;
        audio.play()
    }
    
    clearAnswerInputField();

})

function play(){

    output.classList.add('hidden');
    checkFormat()
    
    leftNumberContainer.innerHTML = `<h1 id="lNumber">${firstNumber}</h1>` ;
    rightNumberContainer.innerHTML = `<h1 id="rNumber">${secondNumber}</h1>`; 
    
}


function checkFormat() {
    if (firstNumber < 10 && !leftNumberContainer.classList.contains('singleDigit')) {
        leftNumberContainer.classList.add('singleDigit');
    }
    if(firstNumber > 9 && leftNumberContainer.classList.contains('singleDigit')){
        leftNumberContainer.classList.remove('singleDigit');
    }
    if (secondNumber < 10) {
    }
    if(secondNumber > 9){
        rightNumberContainer.classList.remove('singleDigit');
    }
}

function isNormalInteger(str) {
    return /^\+?(0|[1-9]\d*)$/.test(str);
}

function clearAnswerInputField(){
    answerInput.value = "";    
}

play();