1. Write a program that converts a temperature from Celsius to Fahrenheit. Prompt the user to
enter the temperature in Celsius and display the equivalent temperature in Fahrenheit.

const celsius = prompt("enter number in celcius:");
const fahrenheit = (celsius * 9) / 5 + 32;
console.log(fahrenheit);

2. Write a program that checks if a given number is even or odd. Prompt the user to enter a
number and display whether it is even or odd.

const number = prompt("enter a number:");

if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

3. Write a program that prompts the user to enter a number. If the number is divisible by 3,
display "Fizz." If it is divisible by 5, display "Buzz." If it is divisible by both 3 and 5, display
"FizzBuzz." Otherwise, display the number itself.

const number = Number(prompt("enter a number:"));

if (number % 3 === 0 && number % 5 === 0) {
  console.log("fizzbuzz");
} else if (number % 3 === 0) {
  console.log("fizz");
} else if (number % 5 === 0) {
  console.log("buzz");
} else {
  console.log(number);
}

4. Write a program that takes three numbers as input and determines the largest among them.
Display the result.

const numberOne = Number(prompt("enter number one:"));
const numberTwo = Number(prompt("enter number two:"));
const numberThree = Number(prompt("enter number three:"));

let largestNumber = numberOne;

if (numberTwo > largestNumber) {
  console.log(`${numberTwo} is largest number`);
} else if (numberThree > largestNumber) {
  console.log(`${numberThree} is largest number`);
} else {
  console.log(`${largestNumber} is the largest number`);
}

5. Write a function that takes a string as input and capitalizes the first letter of each word using
the split, map, charAt, and toUpperCase methods.

const string = prompt("enter a word:");

function capitalFirstLetter(str) {
  const words = str.split(" ");

  const capitalizeLetter = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });
  const capitalizedString = capitalizeLetter.join(" ");
  return capitalizedString;
}
const CapitalLetter = capitalFirstLetter(string);

console.log(CapitalLetter);

6. Write a function that takes a string as input and removes all duplicate characters using the
split, filter, and indexOf methods.

function removeDuplicate(str) {
  const characters = str.split(" ");
  const uniqueChar = characters.filter((char, index) => {
    return characters.indexOf(char) === index;
  });

  const result = uniqueChar.join(" ");
  return result;
}
const str = "rajesh hari mohan hari kishore rajesh";

const removedDuplicate = removeDuplicate(str);

console.log(removedDuplicate);

7. Create a function called capitalizeNames that takes an array of names as a parameter and
returns a new array with the names capitalized.

function capitalizeNames(names) {
  const capitalizedNames = names.map((name) => {
    return name.toUpperCase();
  });
  return capitalizedNames;
}
const names = ['arun', 'kumar', 'sakthi'];
const capitalNames = capitalizeNames(names);
console.log(capitalNames);

8. Given an array numbers with random integers, write a function that sorts the array in
ascending order.

function arrangeNumbers(numbers) {
  const arrangedNumbers = numbers.sort((a, b) => a - b);
  return arrangedNumbers;
}
const numbers = [5, 2, 8, 1, 9, 4];
const arranged = arrangeNumbers(numbers);
console.log(arranged);

9. Create a function called generateFibonacci that takes a number as a parameter and returns an
array with the Fibonacci sequence up to that number.

function generateFibonacci(number) {
  const fibonacciSequence = [0, 1];

  while (
    fibonacciSequence[fibonacciSequence.length - 1] +
      fibonacciSequence[fibonacciSequence.length - 2] <=
    number
  ) {
    const nextFibonacci =
      fibonacciSequence[fibonacciSequence.length - 1] +
      fibonacciSequence[fibonacciSequence.length - 2];
    fibonacciSequence.push(nextFibonacci);
  }

  return fibonacciSequence;
}
const number = 70;

const fibonacciSequence = generateFibonacci(number);
console.log(fibonacciSequence);

10. Implement a function called countVowels that takes a string as a parameter and returns the
number of vowels in the string.

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}
const str = 'sabari easan';
const vowelCount = countVowels(str);
console.log(vowelCount);

11. Create an object called "weather" with properties for "temperature" and "convertTemperature"
method that converts the temperature from Celsius to Fahrenheit.

let temperature = 0;

const weather = {
  convertTemperature: function () {
    const fahrenheit = (this.temperature * 9) / 5 + 32;
    return fahrenheit;
  },
};
weather.temperature = 5;
const convertedTemperature = weather.convertTemperature();
console.log(convertedTemperature);

12. Create an object called "shoppingCart" with properties for "items" and "checkout" method
that calculates the total cost of all items in the shopping cart.

const shoppingCart = {
  items: [],
  checkout: function () {
    let totalCost = 0;

    for (let item of this.items) {
      totalCost += item.price;
    }

    return totalCost;
  },
};

shoppingCart.items = [
  { name: 'T-shirt', price: 320 },
  { name: 'Jeans', price: 700 },
  { name: 'Shoes', price: 800 },
];

const totalCost = shoppingCart.checkout();
console.log(totalCost);
