// Challenge 1
function ageInDays() {
    let birthYear = prompt('Enter your birth year?')
    let ageInDayss = (2021 - birthYear) * 365;
    let p = document.createElement('p');
    p.setAttribute('id', 'ageInDays');
    let textAnswer = document.createTextNode('Your age in days is '+ ageInDayss)
    p.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(p)
}

function reset(){
    document.getElementById('ageInDays').remove();
}

// challenge 2

function generateCat(){
    let image = document.createElement('img');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif";
    let div = document.getElementById('flex-cat-gen')
    div.appendChild(image);
}

//Challenge 3
function rpsGame(yourChoice){
    //console.log(yourChoice)  
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    
    botChoice = numTOChoice(randToRpsInt())
    //console.log('computer choice:', botChoice);
    
    results = decideWinner(humanChoice, botChoice);
    //console.log(results)
    
    message = finalMessage(results) 
    //console.log(message)
    
    rpsFrontEnd(humanChoice.id, botChoice, message) 
}

//Generating the random number

function randToRpsInt(){
   return Math.floor(Math.random() * 3)
}

//Converting the random number to choice

function numTOChoice(number){
   return ['rock', 'paper', 'scissors'][number];
}

//Deciding the winner 
 function decideWinner(yourChoice, computerChoice) {
     var rpsDatabase = {
         'rock' : {'scissors': 1, 'rock': 0.5, 'paper': 0},
         'paper' : {'rock': 1, 'paper': 0.5, 'scissors': 0},
         'scissors' : {'paper': 1, 'scissors': 0.5, 'rock': 0}
     };

     let yourScore = rpsDatabase[yourChoice][computerChoice]
     let computerScore = rpsDatabase[computerChoice][yourChoice]
     return [yourScore, computerScore]
 }
 
// Printing the message
function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message': 'You lost', 'color': 'red'}
    } else if (yourScore === 0.5){
        return {'message': 'You tied', 'color': 'yellow'}
    }else {
        return {'message': 'You won', 'color': 'green'}
    }
}

// Display information in the frontend
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    let imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let messageDiv = document.createElement('div');
    let botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height= 150 width= 150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style= 'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height= 150 width= 150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"


    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

//Challenge 4
let all_buttons = document.getElementsByTagName('button');
console.log(all_buttons)

let copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1])   
}
console.log(all_buttons[0]);


/* function buttonColorChange(buttonThingy){
    if (buttonThingy.value === 'red'){
        buttonsRed();
    } else if (buttonThingy.value === 'green'){
        buttonsGreen();
    } else if (buttonThingy.value === 'reset'){
        buttonsReset();
    } else if(buttonThingy.value === 'random') {
        buttonsRandom();
    }
}

function buttonsRed(){
    for (let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].clasList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
} */

