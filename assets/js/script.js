document.getElementById("start-button").addEventListener("click", function(){
    var timeleft = 15;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("start-timer").innerHTML = timeleft + 
    " seconds remaining";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("start-timer").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(start-timer);
});
    

const questions = [
    {
    question: "What is CSS used for in web development?",
    options: [
        {text: "adding functions to webpages", correct: false},
        {text: "adding styles to webpages", correct: true},
        {text: "adding text to webpages", correct: false},
        {text: "CSS is not used in web development", correct: false},
    ],
    },
    {
        question: "What symbols make up the programming language Python?",
        options: [
            {text: "words and characters", correct: true},
            {text: "images and words", correct: false},
            {text: "numbers and characters", correct: false},
            {text: "Pyhton is not a coding language", correct: false},
        ]
    },
    {
        question: "In the coding language Python, what does the following code do? 'print('Hello, world!')'",
        options: [
            {text: "it doesn't do anything", correct: false},
            {text: "it is a virus and breaks your computer", correct: false},
            {text: "it prints out a sheet of paper from the connected printer reading 'Hello, world!'", correct: false},
            {text: "it causes 'Hello, world!' to appear on the screen when the code is run", correct: true},
        ]
    },
    {
        question: "What is an error that causes a program not to run referred to as?",
        options: [
            {text: "a moth", correct: false},
            {text: "a birdy", correct: false},
            {text: "a sparrow", correct: false},
            {text: "a bug", correct: true},
        ]
    },
    {
        question: "What do you call a single instruction for a computer to follow?",
        options: [
            {text: "a code", correct: false},
            {text: "an option", correct: false},
            {text: "a command", correct: true},
            {text: "a demand", correct: false},
        ]
    },
    {
        question: ""
    }
    
]