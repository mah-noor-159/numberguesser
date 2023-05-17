// Game values
let min = 1;
let max = 10;
let winningNum = 2;
let guessesLeft = 3;


// UI VALUES
const game = document.getElementById('game');
const minNum = document.getElementsByClassName('min-num');
const maxNum = document.getElementsByClassName('max-num');
const guessBtn = document.getElementById('guess-btn');
const guessInput = document.getElementById('guess-input');
const msge = document.getElementById('message');

// assign ui min and max
minNum.textContent = min;
maxNum.textContent = max;


// play again event listener
// game.addEventListener('mousedown',function(e){
//     if(e.target.className=== 'Play-Again') {
//         window.document.reload()
//     }



    
// })

// listen for guess
guessBtn.addEventListener('click', function () {
    
    if (guessBtn.value === 'Play Again') {
        location.reload()
    } else {
        let guess = parseInt(guessInput.value);
        // console.log(guess);
    
        //   validate
        if (isNaN(guess) || guess < min || guess > max) {
            setMessage(`Please enter a number between ${min} and ${max}`, 'red');
        }
    
    
        // check if won
        if (guess === winningNum) {
    
            gameOver(true, `${winningNum} is correct , YOU WIN!!`)
            // // disabled input
            // guessInput.disabled=true;
            // //  change input border color
            // guessInput.style.borderColor='green';
            // // set message
            // setMessage(`${winningNum} is correct , YOU WIN!!`,'green');
        } else {
            // wrong number
            guessesLeft -= 1;
    
    
            if (guessesLeft === 0) {
    
                gameOver(false, `GameOver, you lost. The correct number was  ${winningNum}`)
                // GameOver,you lost
    
                guessInput.disabled = true;
                //  change input border color
                guessInput.style.borderColor = 'red';
                // set message
                setMessage(`GameOver, you lost. The correct number was  ${winningNum}`, 'red')
            } else {
    
                //  change input border color
                guessInput.style.borderColor = 'red';
    
                // clear text
                guessInput.value = '';
                // Game continues , answer wrong!
                setMessage(`${guess} is not correct, ${guessesLeft} guesses left!`, 'red')
            }
        }
    }

});


// GAME OVER
function gameOver(won, msg) {

    let color
    won === true ? color = 'green' : color = 'red'
    // disabled input
    guessInput.disabled = true;
    //  change input border color
    guessInput.style.borderColor = 'color';

    // change text color
    msge.style.color = color;
    // set message
    setMessage(msg);

    // play Again?
    guessBtn.value='Play Again';
    guessBtn.classList.add( 'Play-Again','p-2')

   
}



// set message
function setMessage(msg, color) {
    msge.style.color = color;
    msge.textContent = msg;
    setTimeout(() => {
        msge.textContent = '';
    }, 4000);
}

