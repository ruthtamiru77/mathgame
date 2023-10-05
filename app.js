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
let firstNumber = Math.floor(Math.random()*50);
let secondNumber = Math.floor(Math.random()*50);
let result = firstNumber + secondNumber


button.addEventListener('click', function(){
    
    
    firstNumber = Math.floor(Math.random()*50);
    secondNumber = Math.floor(Math.random()*50);
    result = firstNumber + secondNumber;
    playerAnswer.classList.remove('hidden');
    play();
});

checkAnswer.addEventListener('click', function(){
     
    
    if(isNormalInteger(answerInput.value)){

    }else{
        alert("not a number");
        clearAnswerInputField();
    }
    if(answerInput.value == result){
        
        playerAnswer.classList.add('hidden');
        output.classList.remove('hidden');
        output.innerHTML = `<h1 id="goodAnswer">${result}</h1>`;
        audio1.play()
    }else{
        playerAnswer.classList.add('hidden');
        output.classList.remove('hidden');
        output.innerHTML = `<h1 id="badanswer">${result}</h1>`;
        audio.play()
    }
    
    clearAnswerInputField();

})

function play(){

    output.classList.add('hidden');
    
    
    leftNumberContainer.innerHTML = `<h1 id="lNumber">${firstNumber}</h1>` ;
    rightNumberContainer.innerHTML = `<h1 id="rNumber">${secondNumber}</h1>`; 
    
}


function isNormalInteger(str) {
    return /^\+?(0|[1-9]\d*)$/.test(str);
}

function clearAnswerInputField(){
    answerInput.value = "";    
}

play();