'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let valorPos = 0
    let valorNeg = 0 
    let valorNulo = 0
    for(let i=0; i< arr.length;i++){
        if(arr[i]>0){
            valorPos +=1
        }else if(arr[i] < 0){
            valorNeg +=1
        }else {
            valorNulo += 1
        }
    }
    const total = arr.length
    console.log((valorPos/total).toFixed(5))
    console.log((valorNeg/total).toFixed(5))
    console.log((valorNulo/total).toFixed(5))
    console.log({valorNulo})
    
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

let array= [1, 2, 3, -1, -2, -3, 0, 0]

plusMinus(array)