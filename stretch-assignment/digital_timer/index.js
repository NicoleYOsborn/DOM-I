let secondTens = document.querySelector("#secondTens");
let secondOnes = document.querySelector("#secondOnes");
let colon = document.querySelector("#colon");
let msHundreds = document.querySelector("#msHundreds");
let msTens = document.querySelector("#msTens");

var startButton = document.createElement("button");
startButton.innerHTML = "Start Timer";

var stopButton = document.createElement("button");
stopButton.innerHTML = "Stop Timer";

var body = document.querySelector("body");
body.appendChild(startButton);
body.appendChild(stopButton);

var intervalID ;

startButton.addEventListener("click", function(){
    intervalID = window.setInterval(stopWatch, 10);
} )

var digits = document.querySelectorAll(".digit")

msTens = 0;
msHundreds = 0;
secondOnes = 0;
secondTens = 0;

function stopWatch(){

    msTens++;

    if(msTens/10 === 1){
        msTens = 0;
        msHundreds++;

        if(msHundreds/10 === 1){
            msHundreds = 0;
            secondOnes++;

            if(secondOnes/10 === 1){
                secondOnes = 0;
                secondTens++;
            }
        }
    }

    document.querySelector("#msTens").innerHTML = msTens;
    document.querySelector("#msHundreds").innerHTML = msHundreds;
    document.querySelector("#secondOnes").innerHTML = secondOnes;
    document.querySelector("#secondTens").innerHTML = secondTens;

    if (secondTens === 1){
        document.querySelector(".digits").classList.add("redDigit");
        clearInterval(intervalID)
    };
    
}



// let intervalID = window.setInterval(stopWatch, 10);

function clear(interval){
    clearInterval(interval)
}



// let count = 0;

// let intervalID;




// console.log(secondOnes.textContent);

stopButton.addEventListener("click", function(){
    clearInterval(intervalID);
})
