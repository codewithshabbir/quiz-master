export const quizData = [
  {
    quizTitle: "HTML",
    quizLogoSrc: "./images/html-1.svg",
    quizQuestions: [
      {
        id: 1,
        question: "What does HTML stand for?",
        choices: [
          "Hyper Text Markup Language",
          "High Text Markup Language",
          "Hyperlinks and Text Markup Language",
          "None of the above",
        ],
        correctAnswer: "Hyper Text Markup Language",
      },
      {
        id: 2,
        question: "Which tag is used for the largest heading in HTML?",
        choices: ["<h1>", "<h2>", "<h3>", "<h6>"],
        correctAnswer: "<h1>",
      },
      {
        id: 3,
        question: "Which attribute is used to define the style of an element?",
        choices: ["style", "font", "class", "id"],
        correctAnswer: "style",
      },
      {
        id: 4,
        question:
          "What is the correct HTML element for inserting a line break?",
        choices: ["<lb>", "<br>", "<break>", "<line>"],
        correctAnswer: "<br>",
      },
      {
        id: 5,
        question: "What does the <a> tag define in HTML?",
        choices: ["Anchor", "Alert", "Area", "Abbreviation"],
        correctAnswer: "Anchor",
      },
      {
        id: 6,
        question:
          "Which of these is the correct HTML for creating a hyperlink?",
        choices: [
          '<a href="url">link</a>',
          '<link href="url">link</link>',
          '<a>link href="url"</a>',
          '<hyperlink href="url">link</hyperlink>',
        ],
        correctAnswer: '<a href="url">link</a>',
      },
      {
        id: 7,
        question:
          "Which of the following is the correct way to add a comment in HTML?",
        choices: [
          "// This is a comment",
          "/* This is a comment */",
          "<!-- This is a comment -->",
          "# This is a comment",
        ],
        correctAnswer: "<!-- This is a comment -->",
      },
      {
        id: 8,
        question: "Which tag is used to define an unordered list?",
        choices: ["<ol>", "<ul>", "<li>", "<list>"],
        correctAnswer: "<ul>",
      },
      {
        id: 9,
        question: "Which of these tags is used to create a table in HTML?",
        choices: ["<table>", "<tr>", "<td>", "<table-tag>"],
        correctAnswer: "<table>",
      },
      {
        id: 10,
        question: "Which tag is used to define an input field in HTML?",
        choices: ["<textfield>", "<input>", "<button>", "<field>"],
        correctAnswer: "<input>",
      },
    ],
  },
  {
    quizTitle: "CSS",
    quizLogoSrc: "./images/css-3.svg",
    quizQuestions: [
      {
        id: 1,
        question: "What does CSS stand for?",
        choices: [
          "Creative Style Sheets",
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "None of the above",
        ],
        correctAnswer: "Cascading Style Sheets",
      },
      {
        id: 2,
        question:
          "Which property is used to change the background color in CSS?",
        choices: ["color", "background-color", "bg-color", "color-background"],
        correctAnswer: "background-color",
      },
      {
        id: 3,
        question: "How can you make a list appear horizontal in CSS?",
        choices: [
          "list-style-type: horizontal;",
          "display: inline;",
          "display: block;",
          "list-style: inline;",
        ],
        correctAnswer: "display: inline;",
      },
      {
        id: 4,
        question: "Which CSS property controls the text size?",
        choices: ["font-size", "text-size", "font-style", "text-style"],
        correctAnswer: "font-size",
      },
      {
        id: 5,
        question: "How do you make a hyperlink look like a button in CSS?",
        choices: [
          "background-color: blue;",
          "color: blue;",
          "display: block;",
          "border: none;",
        ],
        correctAnswer: "background-color: blue;",
      },
      {
        id: 6,
        question:
          "Which CSS property is used to set the spacing between words?",
        choices: ["letter-spacing", "word-spacing", "text-spacing", "word-gap"],
        correctAnswer: "word-spacing",
      },
      {
        id: 7,
        question:
          "Which CSS property controls the space between the element and its surrounding elements?",
        choices: ["margin", "padding", "border", "spacing"],
        correctAnswer: "margin",
      },
      {
        id: 8,
        question:
          "What is the correct syntax to link a CSS file to an HTML document?",
        choices: [
          '<link href="style.css">',
          '<link rel="stylesheet" href="style.css">',
          '<stylesheet href="style.css">',
          '<css link="style.css">',
        ],
        correctAnswer: '<link rel="stylesheet" href="style.css">',
      },
      {
        id: 9,
        question:
          "Which property is used to change the font of an element in CSS?",
        choices: ["font-family", "font-style", "text-font", "font-type"],
        correctAnswer: "font-family",
      },
      {
        id: 10,
        question: "What is the default value of the position property in CSS?",
        choices: ["relative", "absolute", "fixed", "static"],
        correctAnswer: "static",
      },
    ],
  },
  {
    quizTitle: "JavaScript",
    quizLogoSrc: "./images/javascript-1.svg",
    quizQuestions: [
      {
        id: 1,
        question: "What does JavaScript allow you to do?",
        choices: [
          "Create static pages",
          "Create dynamic web content",
          "Design graphics",
          "Create databases",
        ],
        correctAnswer: "Create dynamic web content",
      },
      {
        id: 2,
        question: "Which symbol is used for comments in JavaScript?",
        choices: ["//", "#", "<!--", "/*"],
        correctAnswer: "//",
      },
      {
        id: 3,
        question:
          "Which method is used to add an element to an array in JavaScript?",
        choices: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: "push()",
      },
      {
        id: 4,
        question: "How do you create a function in JavaScript?",
        choices: [
          "function myFunction()",
          "def myFunction()",
          "create myFunction()",
          "function: myFunction()",
        ],
        correctAnswer: "function myFunction()",
      },
      {
        id: 5,
        question:
          "Which operator is used to assign a value to a variable in JavaScript?",
        choices: ["=", "==", "===", ":="],
        correctAnswer: "=",
      },
      {
        id: 6,
        question: "How can you access an element by its ID in JavaScript?",
        choices: [
          "getElementById()",
          "getElementByClass()",
          "querySelector()",
          "getElementByTagName()",
        ],
        correctAnswer: "getElementById()",
      },
      {
        id: 7,
        question:
          "Which event is triggered when a button is clicked in JavaScript?",
        choices: ["onClick", "onSubmit", "onLoad", "onChange"],
        correctAnswer: "onClick",
      },
      {
        id: 8,
        question: "What does NaN stand for in JavaScript?",
        choices: [
          "Not a Node",
          "Not a Number",
          "Null and None",
          "Nothing Available Now",
        ],
        correctAnswer: "Not a Number",
      },
      {
        id: 9,
        question: "How do you create a new array in JavaScript?",
        choices: ["[]", "{}", "()", "<>"],
        correctAnswer: "[]",
      },
      {
        id: 10,
        question:
          "Which of these methods is used to combine two arrays in JavaScript?",
        choices: ["concat()", "combine()", "merge()", "add()"],
        correctAnswer: "concat()",
      },
    ],
  },
  {
    quizTitle: "Bootstrap",
    quizLogoSrc: "./images/Bootstrap_logo.svg",
    quizQuestions: [
      {
        id: 1,
        question: "Which class is used to create a button in Bootstrap?",
        choices: ["btn", "button", "btn-primary", "btn-style"],
        correctAnswer: "btn-primary",
      },
      {
        id: 2,
        question: "What is the default grid system in Bootstrap?",
        choices: ["12 columns", "6 columns", "8 columns", "16 columns"],
        correctAnswer: "12 columns",
      },
      {
        id: 3,
        question:
          "Which class is used to create a responsive image in Bootstrap?",
        choices: [
          "img-fluid",
          "img-responsive",
          "img-full",
          "img-responsive-fluid",
        ],
        correctAnswer: "img-fluid",
      },
      {
        id: 4,
        question: "Which class in Bootstrap is used to make text bold?",
        choices: [
          ".text-bold",
          ".font-weight-bold",
          ".bold-text",
          ".text-strong",
        ],
        correctAnswer: ".font-weight-bold",
      },
      {
        id: 5,
        question:
          "What is the class used for adding a background color in Bootstrap?",
        choices: ["bg-color", "background", "bg-primary", "bg-bg"],
        correctAnswer: "bg-primary",
      },
      {
        id: 6,
        question: "Which Bootstrap component is used to create a modal window?",
        choices: [".modal", ".popup", ".alert", ".popup-window"],
        correctAnswer: ".modal",
      },
      {
        id: 7,
        question: "What class is used to create a card in Bootstrap?",
        choices: [".card", ".panel", ".box", ".container"],
        correctAnswer: ".card",
      },
      {
        id: 8,
        question:
          "Which class is used to create a navigation bar in Bootstrap?",
        choices: ["navbar", "navigation-bar", "nav", "navigation"],
        correctAnswer: "navbar",
      },
      {
        id: 9,
        question: "What class is used to create a form group in Bootstrap?",
        choices: [".form-group", ".input-group", ".input-field", ".form-input"],
        correctAnswer: ".form-group",
      },
      {
        id: 10,
        question: "Which class in Bootstrap is used to center-align text?",
        choices: [
          ".text-center",
          ".align-center",
          ".center-text",
          ".middle-align",
        ],
        correctAnswer: ".text-center",
      },
    ],
  },
  {
    quizTitle: "Tailwind CSS",
    quizLogoSrc: "./images/tailwindcss.svg",
    quizQuestions: [
      {
        id: 1,
        question:
          "Which utility class in Tailwind CSS is used to set the background color?",
        choices: ["bg-color", "bg-red", "bg-blue-500", "background-color"],
        correctAnswer: "bg-blue-500",
      },
      {
        id: 2,
        question: "Which class is used to apply margin in Tailwind CSS?",
        choices: ["m-", "mt-", "mr-", "mb-"],
        correctAnswer: "m-",
      },
      {
        id: 3,
        question: 'What does the "flex" class do in Tailwind CSS?',
        choices: [
          "Makes the element fixed",
          "Enables flexbox layout",
          "Makes the element inline",
          "None of the above",
        ],
        correctAnswer: "Enables flexbox layout",
      },
      {
        id: 4,
        question:
          "How do you apply padding to all sides of an element in Tailwind CSS?",
        choices: ["p-4", "padding-4", "pad-4", "padding-all-4"],
        correctAnswer: "p-4",
      },
      {
        id: 5,
        question: "Which class is used to set the font size in Tailwind CSS?",
        choices: ["text-lg", "font-lg", "text-size", "font-size-lg"],
        correctAnswer: "text-lg",
      },
      {
        id: 6,
        question: "How do you apply a border to an element in Tailwind CSS?",
        choices: ["border", "border-solid", "border-2", "all of the above"],
        correctAnswer: "all of the above",
      },
      {
        id: 7,
        question: "Which class is used to hide an element in Tailwind CSS?",
        choices: ["hidden", "invisible", "display-none", "no-show"],
        correctAnswer: "hidden",
      },
      {
        id: 8,
        question: "How do you apply text color in Tailwind CSS?",
        choices: ["text-color", "text-red-500", "color-text", "font-color"],
        correctAnswer: "text-red-500",
      },
      {
        id: 9,
        question:
          "Which class is used to add space between elements in Tailwind CSS?",
        choices: ["space-x", "gap-x", "spacing", "space-between"],
        correctAnswer: "gap-x",
      },
      {
        id: 10,
        question:
          "Which utility class in Tailwind CSS is used to align items vertically in a flex container?",
        choices: [
          "items-center",
          "justify-center",
          "align-middle",
          "align-center",
        ],
        correctAnswer: "items-center",
      },
    ],
  },
];