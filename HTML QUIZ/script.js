
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions,currentQuestionIndex;
let quizScore =0;

startButton.addEventListener('click',startGame)

nextButton.addEventListener('click',()=>{
    currentQuestionIndex++
    setnextQuestion()
})

function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions=questions.sort(()=>Math.random() -0.5)
    currentQuestionIndex=0;
    questionContainerElement.classList.remove('hide')
    setnextQuestion()
    quizScore=0
}

function setnextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText= question.question;
    question.answers.forEach((answer)=>{
        const button =document.createElement('button')
        button.innerText=answer.text;
        button.classList.add('btn')
        if( answer.correct){
            button.dataset.correct =answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusclass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton=e.target
    const correct = selectedButton.dataset.correct

    setstatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach((button)=>{
        setstatusClass(button,button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex +1){
        nextButton.classList.remove("hide")
    }else{
        startButton.innerText="restart"
        startButton.classList.remove("hide")
    }
    if(selectedButton.dataset = correct){
        quizScore++
    }
    document.getElementsById('right-answers').innerText=quizScore
}

function setstatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }else{
        element.classList.add("wrong")
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
constquestions = [
    {
        question: 'which one of these is a java script framework?',
        answers :[
            { text: 'Python',correct: false},
            { text: 'Django',correct: false},
            { text: 'React',correct: true},
            { text: 'Eclipse',correct: false},

        ],
    },
    {
        question: 'who is the PM of India?',
        answers :[
            { text: 'Narendra Modi',correct: true},
            { text: 'Rahul gandhi',correct: false},
            { text: 'Yogi',correct: true},
            { text: 'Amit shah',correct: false},
        ],
    },
    {
        question: 'which one of these is a java script framework?',
        answers :[
            { text: 'Python',correct: false},
            { text: 'Django',correct: false},
            { text: 'React',correct: true},
            { text: 'Eclipse',correct: false},

        ],
    },
    {
        question: 'What is 4*3?',
        answers:[
            { text: '6',correct: false},
            { text: '12',correct: true},
            { text: '25',correct: true},
            { text: '40',correct: false},

        ],
    },

]