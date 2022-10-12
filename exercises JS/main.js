// Exercise 1: Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423. 

// Save your JavaScript file and reload the page. Make sure you see the correct output.  If not, investigate and fix.

console.log(`-----------------------------------------------------------------------`)

console.log(`----------------------------- Ejercicio 1 -----------------------------`)

function numberReversed(number){
    let numbersReversed = String(number).split('')


    console.log(numbersReversed.reverse())
}

numberReversed(12345)

console.log(`-----------------------------------------------------------------------`)

console.log(`----------------------------- Ejercicio 2 -----------------------------`)

// Exercise 2: Write a JavaScript function that returns a string in alphabetical order. For example, 
// if x = 'webmaster' then the output should be 'abeemrstw'. Punctuation and numbers aren't passed in the string.

// Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix

function orderString(string){
    let orderStrings = string.split('')

    console.log(orderStrings.sort())
}

orderString('alejandro')

console.log(`-----------------------------------------------------------------------`)

console.log(`----------------------------- Ejercicio 3 -----------------------------`)

// Exercise 3: Write a JavaScript function that converts the first letter of every word to uppercase. 
// For example, if x = "prince of persia" then the output should be "Prince Of Persia".

// Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix.

function convertsFirstLetter(string){
    let strings = string.split( ' ')

    let stringConverted = ''

    for(let str of strings){
        stringConverted += `${str[0].toUpperCase()}${str.slice(1)} `
    }

    console.log(stringConverted)
}

convertsFirstLetter("prince of persia")

console.log(`-----------------------------------------------------------------------`)

console.log(`----------------------------- Ejercicio 4 -----------------------------`)

// Exercise 4: Write a JavaScript function that finds the longest word in a phrase. 
// For example, if x = "Web Development Tutorial", then the output should be "Development".

// Save your JavaScript file and reload the page. Make sure you see the correct output. If not, investigate and fix

function longestInAPhrase(phrase){
    let phraseComplete = phrase.split(' ')
    let wordMoreLongest = ''

    for(let word of phraseComplete){
        if( word.length > wordMoreLongest.length ){
            wordMoreLongest = word
        }
    }

    console.log(wordMoreLongest)
}

longestInAPhrase('Web Development Tutorial')