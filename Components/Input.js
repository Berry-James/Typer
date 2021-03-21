export const Input = (INPUT) => {

    let sample = 'This is the text to type'.split(" ");

    let wordObjs = [];

    sample.forEach(word => {
        const wordObj = {
            text: word,
            correct: false
        }
        wordObjs.push(wordObj);
    })

    console.log(wordObjs);
    
    let typed = INPUT.value;
     console.log(INPUT.value.length)

    if(INPUT.value.charAt(INPUT.value.length) === sample.charAt(INPUT.value.length)) {
        console.log('correct!')
    }

    

}