/*

    array of objects (array of questions)
    each question (object) will have the question itself, array of answers and correct answer
    e.g.


    you will need a variable called currentQuestion which will initially be set to 0

    you will use this variable to determine which question (index) you should generate

    {
        question: "whats your name ?",
        choices: ['name one', 'name two'],
        correctIndex: 0
    }

*/



var questionTemp = $('<div class="question-title"><h2></h2></div>');
var answerTemp = $('<div class="answers"><div class="block1"><div class="answer-one"><button></button></div><div class="answer-two"><button></button></div></div><div class="block2"><div class="answer-three"><button></button></div><div class="answer-four"><button></button></div></div></div>');

var questions = [{
    question: 'Kako se zove vrlo utjecajna osoba?',
    choices: ['krupna riba', 'bijela riba', 'slana riba', 'plava riba'],
    correctIndex: 0
}, {
    question: 'Kako se zove najmilija zabava u dokolici?',
    choices: ['lobi', 'hobi', 'čobi', 'bobi'],
    correctIndex: 1
}, {
    question: 'Jelen vrlo razgranatih rogova u lovačkom žargonu zove se:',
    choices: ['kapitalist', 'buržuj', 'aristokrat', 'kapitalac'],
    correctIndex: 3
}, {
    question: 'Kako glasi narodni naziv za Veneru?',
    choices: ['Danica', 'Marica', 'Katica', 'Slavica'],
    correctIndex: 0
}, {
    question: '"Labuđe jezero" P.Iliča Čajkovskog je...',
    choices: ['simfonija', 'mjuzikl', 'opereta', 'balet'],
    correctIndex: 3
}, {
    question: 'Samurajski kodeks zove se...',
    choices: ['harakiri', 'bushido', 'kendo', 'aikido'],
    correctIndex: 1
}];


$('#start').click(function() {
    $('.container').find('.hidden').removeClass('hidden');
    $(this).addClass('hidden');

    for (var i = 0; i < questions[question].length; i++) {

    }

    var currentQuestion = 0;

    var value = questions[i];
    console.log(questions[i]);
    //questionTemp.find('h2').text(value);

});