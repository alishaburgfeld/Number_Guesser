function userGuess(event) {
    event.preventDefault();      //not working for some reason
    // console.log("Welcome to the Number Guessing Game! The computer has selected a number, it's your job to guess it!")
    let randomNumber=Math.floor(Math.random()*100)
    // console.log(`randomnumber: ${randomNumber}`)
    // let guess=document.getElementById("form")        //still don't really understand why its not this
    // console.log(event)
    let guess=Number(event.target.elements[0].value)
    // console.log(guess)
    // console.log(typeof(guess))
    let guesses = document.getElementById("guesses")
    console.log(`guesses: ${guesses}`)
    let wrong= document.getElementById("wrong")             //couldn't put .innerText here in the initial variable
    console.log(`wrong: ${wrong}`)
    let answer= document.querySelector("#answer")                    
    let count=0                                                     //I had a while loop, but I wasn't "re-getting" the guess value. took while loop out
    if (guess < randomNumber) {
        if (count===0) {
            guesses.innerText=`You have guessed:\n${guess}: TOO LOW!`       //I had .innertext. its innerText!!!
            count++
        }
        else {
        wrong.innerText= "Guess again, but HIGHER!"
        count++
        guesses.innerText+=`\n${guess}: TOO LOW!`
        }
    }
    else if (guess > randomNumber) {
        if (count===0) {
            guesses.innerText=`You have guessed:\n${guess}: TOO HIGH!`
            count++
        }
        else {
        wrong.innerText= "Guess again, but LOWER!"
        count++
        guesses.innerText+=`\n${guess}: TOO HIGH!`
        }
    }
   else {
    answer.innerText=`Congratulations, you guessed correctly! The number was ${randomNumber}`
   }
}


// `createElement`, `createTextNode`, and `appendChild`


// function handleFormSubmit(event) {
//     // Prevents form "default behavior" - which is to send data to server
//     // and refresh the page.
//     event.preventDefault();
//     console.log('SUBMITTING');
    
//     let evt = event;
//     let nameElem = evt.target.elements[0]
//     console.log(nameElem.name, nameElem.value)
//     let favColorElem = evt.target.elements[1]
//     console.log(favColorElem.name, favColorElem.value)
    
//   }
  
  // When called, gets an <input> with id="input-name"
  // and prints anything the user has typed into the <input> element.
//   function showGreeting(event) {
//     console.log("Event Listener A");
//     console.log("EVENT: ", event.target.value);
//     let nameInput = document.getElementById("input-name");
//     // console.log(nameInput);
  
//     let nameInputValue = nameInput.value;
//     console.log("Input Value: " + nameInputValue);
//   }