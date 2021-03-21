export const Input = (INPUT, returnedText, counter) => {

    const returned = returnedText;

    let currentWordCounter = counter;

    let typed = INPUT.value;
    let currentWord = returned[currentWordCounter];
    console.log(currentWordCounter)

    if(typed === currentWord) {
        ++currentWordCounter;
        INPUT.value = '';
        console.log(currentWord);
        return("correct")
    }
    

    

}