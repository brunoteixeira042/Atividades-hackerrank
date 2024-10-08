'use strict';

const fs = require('fs');

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let sumDiagonalDireita = 0
    let sumDiagonalEsquerda = 0
    let diferencaDiagonal = 0
    for (let i=0; i< arr.length; i++){
        sumDiagonalDireita += arr[i][i]
        sumDiagonalEsquerda += arr[i][arr.length-1-i]
    diferencaDiagonal = sumDiagonalDireita - sumDiagonalEsquerda
}
    if(diferencaDiagonal<0){
      return  diferencaDiagonal = diferencaDiagonal*(-1)
    }
    return diferencaDiagonal
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
