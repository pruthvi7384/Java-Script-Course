// Challenge 1 : Your Age in Dayes
function ageInDayes(){
    var birthday = prompt('What year were you born...Good friend ?');
    var ageInDayess =(2021-birthday)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are' + ' ' + ageInDayess + ' ' + 'days old');
    h1.setAttribute('id','ageInDayes');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageInDayes').remove();
}

//Challenge 2 : Cat Generator

function generatorCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//Challenge 3 : Rock, Paper, Scissors

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer Choice :',botChoice);
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message =  finalMessage(results);//'You won'
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}
function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock', 'paper','scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1,'rock': 0.5,'paper': 0},
        'paper': {'rock': 1,'paper': 0.5,'scissors': 0},
        'scissors': {'paper': 1,'scissors': 0.5,'rock': 0}
    };
  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];
 return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore===0){
        return {'message':'You lost','color': 'red'};
    } else if(yourScore===0.5){
        return {'message':'You tied','color':'yellow'};
    }else{
        return {'message':'You won','color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };
    //let remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humndiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var messagediv = document.createElement('div');
    humndiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1)'>"
    botdiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)'>"
    messagediv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px;' >"+finalMessage['message']+' '+'!'+"</h1>"
    document.getElementById('flex-box-rps-div').appendChild(humndiv);
    document.getElementById('flex-box-rps-div').appendChild(messagediv);
    document.getElementById('flex-box-rps-div').appendChild(botdiv);
}

//challenge 4 : change the color All Buttons

var allButtons = document.getElementsByTagName('button');
var copyAllButtons = [];
for (let i=0; i<allButtons.length; i++) {
    copyAllButtons.push(allButtons[i].classList[1]);
}
//console.log(copyAllButtons)

function buttonColorChange(buttonThingy){
 if (buttonThingy.value==='red'){
     buttonsRed();
 }else if (buttonThingy.value==='green'){
     buttonGreen();
 }else if(buttonThingy.value==='reset'){
     buttonColorReset();
 }else if(buttonThingy.value==='random'){
    randomColors();
 }
}
function buttonsRed(){
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}
function buttonGreen(){
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}
function buttonColorReset(){
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}
function randomColors(){
    let choice = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success'];
    for(var i = 0; i < allButtons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choice[randomNumber]);
    }
}

//challenge 5 : blackjack

let blackjackGame = {
    'you':{'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0},
    'dealer':{'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
    'wins':0,
    'losses':0,
    'draws':0,
    'isStand': false,
    'turnsOver': false,
};
const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('assets/sounds/swish.m4a');
const winSound = new Audio('assets/sounds/cash.mp3');
const lostSound = new Audio('assets/sounds/aww.mp3');
const drawSound = new Audio('assets/sounds/draw.mp3');
//console.log(YOU);
document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click',dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);

function blackjackHit(){
    if(blackjackGame['isStand']===false){
        let card = randomCards();
        //console.log(card);
        showCards(card,YOU);
        updateScore(card,YOU);
        //console.log(YOU['score']);
        showScore(YOU);
    }
}

function randomCards(){
    var randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];

}

function showCards(card,activePlayer){
    if(activePlayer['score'] <=21){
        let cardImage = document.createElement('img');
        cardImage.src = `assets/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackjackDeal(){
   if(blackjackGame['turnsOver']===true){
        blackjackGame['isStand']=false;

        let yourImage =document.querySelector('#your-box').querySelectorAll('img');
        let dealerImage = document.querySelector('#dealer-box').querySelectorAll('img');

        //console.log(yourImage);
        for(let i=0; i<yourImage.length; i++){ 
            yourImage[i].remove();
        }
        for(let i=0; i<dealerImage.length; i++){ 
            dealerImage[i].remove();
        }
        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent =0;
        document.querySelector('#your-blackjack-result').style.color ='#ffffff';
        document.querySelector('#dealer-blackjack-result').textContent =0;
        document.querySelector('#dealer-blackjack-result').style.color='#ffffff';
        document.querySelector('#blackjack-result').textContent ="Let's Play";
        document.querySelector('#blackjack-result').style.color='#000000';

        blackjackGame['turnsOver']=false;
    }
}

function updateScore(card, activePlayer){ 
    if(card === 'A'){
        //If adding 11 keeps me below 21, and 11, otherwise, add 1
        if(activePlayer['score'] + blackjackGame['cardMap'][card][1] <=21){
            activePlayer['score'] +=blackjackGame['cardMap'][card][1];
        }else{
            activePlayer['score'] += blackjackGame['cardMap'][card][0];
        }
    }else{
        activePlayer['score'] += blackjackGame['cardMap'][card];
    }
}

function showScore(activePlayer){
    if(activePlayer['score'] >21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST !';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function dealerLogic(){ 
    blackjackGame['isStand']=true;

    while(DEALER['score']<16 && blackjackGame['isStand'] === true){
        let card = randomCards();
        showCards(card,DEALER);
        updateScore(card,DEALER);
        showScore(DEALER);
        await sleep(1000);
    }
    blackjackGame['turnsOver'] = true;
    let winner = computWinner();
    showResults(winner);
    //console.log(blackjackGame['turnsOver']);
}



//compute winner and return who just won
//update the win,lossess,deaws
function computWinner(){
    let winner;
    if(YOU['score']<=21){
        if(YOU['score']>DEALER['score'] || (DEALER['score']>21)){
            blackjackGame['wins']++;
            //console.log('YOU WON !');
            winner = YOU;
        }else if(YOU['score']<DEALER['score']){
            blackjackGame['losses']++;
            //console.log('YOU Lost !');
            winner = DEALER;
        }else if(YOU['score']===DEALER['score']){
            blackjackGame['draws']++;
            //console.log('YOU DEOW !');
        }
        //condition when user busts but dealer doesen't
    }else if(YOU['score']>21 && DEALER['score']<=21){
        blackjackGame['losses']++;
        //console.log('YOU LOST !');
        winner = DEALER;
        //when you and Dealer busts
    }else if(YOU['score']>21 && DEALER['score']>21){
        blackjackGame['draws']++;
        //console.log('YOU DREW');
    }
    //console.log('WINNER IS :',winner);
    //console.log(blackjackGame);
    return winner;
}
function showResults(winner){
    let message, messageColor;
    if(blackjackGame['turnsOver']===true){
        if(winner===YOU){
            document.querySelector('#wins').textContent=blackjackGame['wins'];
            message = 'You win !';
            messageColor = 'green';
            winSound.play();
        }else if(winner===DEALER){
            document.querySelector('#losses').textContent=blackjackGame['losses'];
            message = 'You lost !';
            messageColor = 'red';
            lostSound.play();
        }else{
            document.querySelector('#draws').textContent=blackjackGame['draws'];
            message = 'You Draw !';
            messageColor='black';
            drawSound.play();
        }
    
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color= messageColor;
    }
}

//Challenge 5: Clock
setInterval(function(){
    var todatDate = new Date();
    var date = todatDate.getDate();
    var year = todatDate.getFullYear();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    //console.log(,date,year,);
    var hours = todatDate.getHours();
    var min = todatDate.getMinutes();
    var sec = todatDate.getSeconds();
    var pm = 'AM';
    if(hours == 12){
        hours=12;
    }
    if(hours>12){
        hours=hours-12;
        pm="PM";
    }

    if(hours<10){
        hours = "0" + hours;
    }

    if(min<10){
        min = "0" + min;
    }

    if(sec<10){
        sec = "0" + sec;
    }

    if(date<10){
        date = "0" + date;
    }
    //console.log(hours,min,sec);
    var ids = ['day','month','year','date','hours','minuts','seconds','pmam'];
    var value = [days[todatDate.getDay()],months[todatDate.getMonth()],year,date,hours,min,sec,pm];
    for(let i = 0; i < ids.length; i++){
        document.getElementById(ids[i]).innerHTML = value[i];
    }
}, 1000);


//Challenge 7: Count Down



setInterval(function(){
    // Set the date we're counting down to
    var countDownDate = new Date("6, April, 2021 11:00:00").getTime();

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    if (distance < 0) {
        document.getElementById("count_message").innerHTML = "EXPIRED !";
        
        var count_E=['count_date','count_hour','count_minute','count_second'];
        var count_value_E=['00','00','00','00','00'];
        for(let z=0; z<count_E.length;z++){
            document.getElementById(count_E[z]).innerHTML = count_value_E[z];
        }
        clearedInterval();
      }

    // Time calculations for days, hours, minutes and seconds
    var days_co = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours_co = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_co = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_co = Math.floor((distance % (1000 * 60)) / 1000);

    if(hours_co<10){
        hours_co = "0" + hours_co;
        //console.log(hours_co);
    }

    if(days_co<10){
        days_co = "0" + days_co;
    }

    if(minutes_co<10){
        minutes_co = "0" + minutes_co;
    }

    if(seconds_co<10){
        seconds_co = "0" + seconds_co;
    }

    var count_ids=['count_date','count_hour','count_minute','count_second'];
    var count_value=[days_co,hours_co,minutes_co,seconds_co];

    // Output the result in an element with id="demo"
    for(let c=0; c<count_ids.length;c++){
        document.getElementById(count_ids[c]).innerHTML = count_value[c];
    }
        
    // If the count down is over, write some text 
    
   
}, 1000);

// Challenge 7: covid App

fetch("https://travel-advisory.p.rapidapi.com/api", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "2be2508134mshcbd97c5c4c6233dp1654f2jsn07ca189c7410",
		"x-rapidapi-host": "travel-advisory.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response.json());
})
.catch(err => {
	console.error(err);
});