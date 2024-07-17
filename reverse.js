// Q19)Write a program to reverse a number?

let reverseNumber=(num)=> {
    const reversedString = num.toString().split('').reverse().join('');
    const reversedNumber = parseInt(reversedString) * Math.sign(num);
    return reversedNumber;
}


const num = 12345;
console.log(`Reversed number: ${reverseNumber(num)}`);
