const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quizContainer = document.querySelector('.quiz-container');
const pages = [...document.querySelectorAll('.page')];

let currentStep = pages.findIndex(page => page.classList.contains('active'));

if (currentStep < 0) {
    currentStep = 1;
    showCurrentStep();
}

pages.forEach(page => {
    page.addEventListener('animationend', () => {
        pages[currentStep].classList.remove('hide');
        page.classList.toggle('hide', !page.classList.contains('active'));
    });
});

quizContainer.addEventListener('click', (e) => {
    let incrementor = 0;

    if (e.target.matches('[data-next]')) {
        incrementor = 1;
    } else if (e.target.matches('[data-previous]')) {
        incrementor = -1;
    }

    if (incrementor === 0) return;

    currentStep += incrementor;
    showCurrentStep();
});

function showCurrentStep() {
    pages.forEach((page, index) => {
        page.classList.toggle('active', index === currentStep);
    });
}
