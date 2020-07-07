const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area").innerHTML;
const originText = document.querySelector("#origin-text p");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");


// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:


// Match the text entered with the provided text on the page:
if (originText==testArea){
    console.log(testArea)
}else{
    console.log("text not typed correctly")
}

// Start the timer:


// Reset everything:


// Event listeners for keyboard input and the reset button:
