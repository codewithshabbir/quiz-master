import { quizData } from "./data.js";

console.log(quizData);

let quizCardsWrapper = document.getElementById("quiz-cards-wrapper");

quizCardsWrapper.innerHTML = "";

quizData.forEach((quiz) => {
  quizCardsWrapper.innerHTML += `
        <div class="bg-gray-800 rounded-lg shadow-md shadow-gray-600 p-4 py-8 flex flex-col justify-between">
            <div class="h-28 rounded-md flex justify-center items-center">
                <img src="${quiz.quizLogoSrc}" alt="${quiz.quizTitle}" class="h-16"> <!-- Dynamically setting image source -->
            </div>
            <div class="flex justify-between items-center">
                <div>
                    <h3 class="mt-4 font-bold text-gray-100">${quiz.quizTitle}</h3> <!-- Dynamically setting quiz title -->
                    <p class="text-gray-400">${quiz.quizQuestions.length} question(s)</p> <!-- Dynamically setting question count -->
                </div>
                <div class="flex justify-between items-center mt-4">
                    <a href="./questions.html" class="bg-slate-700 text-white py-2 px-4 rounded-full hover:bg-slate-600">Start Quiz</a>
                </div>
            </div>
        </div>
    `;
});
