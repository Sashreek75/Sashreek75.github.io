// script.js

// Fun Fact logic
const facts = [
  "🐍 Did you know? Python was named after the comedy group Monty Python!",
  "💡 Variables in Python don't need to be declared with a type!",
  "🔁 Loops help you repeat things quickly and easily.",
  "🎮 You can use Python to make your own games!",
  "🧙‍♂️ Functions are like magic spells you can use again and again.",
  "🌍 Python is used by NASA, Google, and even in movies!",
  "✨ Learning Python can help you create robots, apps, and websites!"
];

function showRandomFact() {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  const funFactElem = document.getElementById('funFact');
  if (funFactElem) funFactElem.textContent = fact;
}

document.addEventListener('DOMContentLoaded', showRandomFact);

const questions = [
  {
    q: 'What does <code>print("Hello, PyQuest!")</code> do?',
    a: [
      "Prints Hello, PyQuest!",
      'Prints <code>print("Hello, PyQuest!")</code>',
      'Prints "Hello, PyQuest!"',
      "Error"
    ],
    correct: "a"
  },
  {
    q: "Which is a valid way to assign a value to a variable?",
    a: [
      "let x = 5",
      "x := 5",
      "x = 5",
      "int x = 5"
    ],
    correct: "c"
  },
  {
    q: 'What is the output of <code>print(3 + 4)</code>?',
    a: [
      "34",
      "7",
      "3 + 4",
      "Error"
    ],
    correct: "b"
  },
  {
    q: "Which data type would you use to store a list of animals?",
    a: [
      "int",
      "str",
      "list",
      "bool"
    ],
    correct: "c"
  },
  {
    q: 'What will this code print?<br><code>animal = "cat"<br>print("My favorite animal is a", animal)</code>',
    a: [
      "My favorite animal is a cat",
      "My favorite animal is a animal",
      "animal",
      "Error"
    ],
    correct: "a"
  },
  {
    q: 'What does the <code>input()</code> function do?',
    a: [
      "Outputs text to the screen",
      "Receives text from the user",
      "Adds two numbers",
      "Defines a variable"
    ],
    correct: "b"
  },
  {
    q: 'What is the result of this code if the user types <b>7</b>?<br><code>num = input("Enter a number: ")<br>print(num)</code>',
    a: [
      "7",
      '"7"',
      "Error",
      "Nothing"
    ],
    correct: "b"
  },
  {
    q: "Which operator is used for multiplication in Python?",
    a: [
      "x",
      "*",
      "X",
      "^"
    ],
    correct: "b"
  },
  {
    q: 'What does this code print?<br><code>for i in range(3):<br>&nbsp;&nbsp;print(i)</code>',
    a: [
      "1 2 3",
      "0 1 2",
      "0 1 2 3",
      "1 2"
    ],
    correct: "b"
  },
  {
    q: "How do you define a function in Python?",
    a: [
      "function myFunc():",
      "def myFunc():",
      "func myFunc():",
      "define myFunc():"
    ],
    correct: "b"
  },
  {
    q: 'What will this function print when called?<br><code>def greet():<br>&nbsp;&nbsp;print("Hello!")<br>greet()</code>',
    a: [
      "greet",
      "Hello!",
      "def greet():",
      "Error"
    ],
    correct: "b"
  },
  {
    q: "Which of these is a correct way to create a list in Python?",
    a: [
      "mylist = (1, 2, 3)",
      "mylist = [1, 2, 3]",
      "mylist = {1, 2, 3}",
      "mylist = <1, 2, 3>"
    ],
    correct: "b"
  },
  {
    q: 'What does this code print?<br><code>colors = ["red", "blue", "green"]<br>print(colors[1])</code>',
    a: [
      "red",
      "blue",
      "green",
      "1"
    ],
    correct: "b"
  },
  {
    q: 'What is the output of this code?<br><code>person = {"name": "Sam", "age": 10}<br>print(person["name"])</code>',
    a: [
      "Sam",
      '"name"',
      "person",
      "Error"
    ],
    correct: "a"
  },
  {
    q: "What is a class in Python used for?",
    a: [
      "To repeat code",
      "To store a sequence of items",
      "To define a blueprint for objects",
      "To print text"
    ],
    correct: "c"
  }
];
