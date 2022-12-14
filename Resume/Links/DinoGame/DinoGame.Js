const dino = document.getElementById("dino"); //     finding the dino and div.
const cactus = document.getElementById("cactus"); // finding the cactus and div.
let score = 0;
let collide = false; // the game starts saying there no collsion

function jump() {
    if (dino.classList != "jump") { //it checks if it has a jump class if not it gives it then after removes it.
        dino.classList.add("jump");

        setTimeout(function() { //setTimeOut means it will only do one time
            dino.classList.remove("jump"); //We remove the class after half a second.0.5 because thats what we have it in the css.
        }, 500); // in 500 mileseconds it will remove the jump class.
    }
}

let isAlive = setInterval(checkCollision, 10); // so if the dino has equal or less then range it will have colllided into each other.

function checkCollision() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    // it finds the top of the dino at all times.

    // get current cactus X position
    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
        //it finds the cactus left all times
    );
    let cactusTop = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("top")
        // it's finding the top of the cactus 
    );

    // detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        // collision
        collide = true;
        alert("Game Over! Your score: " + score);
        score = 0;
        document.getElementById("scoretab").innerHTML = score;
    } else {
        collide = false;
    }
    // if cactusLeft is lest then 50 and cactus is greater then dinoTop is greater or same as 140
    // which means collision is true and you die if it's else/flase you dont die.
}

document.addEventListener("keydown", function(event) { // one keydown it will do the jump in the css
    jump();
    if (!collide) {
        score += 10; // if it doent collide it will add 10 points to the score score += 10 is a simpler way of saying score = score + 10
        document.getElementById("scoretab").innerHTML = score;
    } else {
        document.getElementById("scoretab").innerHTML = 0;
        score = 0; //if it does collide it will make the score zero
    }
});