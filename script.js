console.log( 'js' );

// Micro Challenge #1 - Addition

// function created with parameters num1 and num2
function addNumbers( num1, num2 ){
    // function will return sum of num1 and num2
    return num1 += num2;    
}
// console log testing function with different inputs from example
console.log( '1 + 2 is:', addNumbers( 1, 2 ) );
// copied example with function name changed to addNumbers
// setting variable result equal to the call of the function addNumbers with the arguments 2 and 3
let result = addNumbers( 2, 3 );
// console logging value of variable result
console.log(result);


// Micro Challenge #2 - Conditional

// creating function with parameters num1 and num2
function isGreater( num1, num2 ){
    // conditionals for states of which input is greater and if the inputs are equal
    if ( num1 > num2 ){
        // what is the difference between having return here and leaving it out
        // it appears to run the same either way, what circumstances would it not
        console.log( 'The first number was bigger!' );
    }
        else if ( num1 < num2 ){
            console.log( 'The second number was bigger!');
        }
        else{
            console.log( 'The numbers are the same!' );
        }    
}

// calling the function with each possibility, all log correctly, 
// remember to ask about return vs not in if/if else/else
isGreater( 3, 2 );
isGreater( 2, 3 );
isGreater( 2, 2 );