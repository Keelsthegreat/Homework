let display = document.getElementsByClassName("input") [0]
// using this variable to update contents of the p tag input

let buttons = Array.from(document.getElementsByClassName('button'));
console.log(buttons,typeof buttons)
//convert HTML collection of all the buttons and turn it into an array with Array.from
buttons.map ( button => {
// buttons.map maps through the entire buttons array, map calls back a function and gets all of the elements of the array
button.addEventListener('click', (e) => {
    //click eventListener gives the buttons functionality, e or event is a parameter that will contain all information of our function
    switch(e.target.innerText){
        case 'C':
            display.innerText = '';
            //reverts innertext of input back to nothing
            break;
        case '=':
            display.innerText = eval(display.innerText);
            //eval evaluates JS code and executes it
            break;
        default: 
          display.innerText += e.target.innerText;
     }
})
})
