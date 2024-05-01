/** This program reverses a string using recursion
*
* By: Lucas Tyman
* Version: 1.0
* Since: 2024-04-29
*/

import { createPrompt } from 'bun-promptx'

// Reverses strings using recursion.
function reverseString(stringToReverse: string): string {
  if (stringToReverse == "") {
    return ""
  } else {
    let firstCharacter: string = stringToReverse[0]
    let restOfString: string = stringToReverse.slice(1, stringToReverse.length)
  
    return reverseString(restOfString) + firstCharacter
  }

// ASk for user input
const selectedString = createPrompt('Enter a string to reverse: ').value

// Shows original word
console.log(`The reversed string is ${reverseString(selectedString)}`);
                       
console.log('\nDone.')
