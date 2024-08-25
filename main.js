// Create all elements
const form = document.querySelector('form');
const total = 5;
var score = 0;
const results = document.querySelector('.results');

// Add event listener on forms
form.addEventListener('submit', SubmitAnswers);

// $('.fa-circle-xmark').on('click', function(){
//     // $('.results').hide();
//     console.log('clicked');
// })

function SubmitAnswers(e){
    e.preventDefault();
    
    window.scrollTo({top: 0, behavior: 'smooth'});

    const q1 = document.forms["quizforms"]["q1"].value;
    const q2 = document.forms["quizforms"]["q2"].value;
    const q3 = document.forms["quizforms"]["q3"].value;
    const q4 = document.forms["quizforms"]["q4"].value;
    const q5 = document.forms["quizforms"]["q5"].value;

    // using loop to check the answers selected or not
    for(let i=1; i<=total; i++){
        if(eval('q'+i) == null || eval('q'+i) == ''){
            // console.log(`Please answer question no : ${i}`);
            results.classList.remove('success');
            results.classList.add('warn');
            results.classList.add('animate__animated', 'animate__rubberBand');
            results.innerHTML = `
                <h5>⚠️ Please answer question no : ${i} <i id="close" class="fa-regular fa-circle-xmark"></i></h5>
            `;

            const closeIcon = document.getElementById('close');
            closeIcon.addEventListener('click', function() {
                // Remove the parent h5 element
                this.parentNode.remove();
            });

            return false;
        }
    }

    // using loop to evaluate answers
    var keys = ["a","c","a","b","b"];
    let emotion = 0;

    for(let i=1; i<=total; i++){
        if(eval('q'+i) == keys[i-1]){
            score++;
        }
    }

    // adding emoji
    if(score == 5){
        emotion = 128516;
    }if(score == 4){
        emotion = 128526;
    }else if(score == 3){
        emotion = 128524;
    }else if(score == 2){
        emotion = 128531;
    }else if(score == 1){
        emotion = 128532;
    }

    // console.log(`Your score is ${score} out of ${total}`);
    results.classList.add('success');
    results.classList.add('animate__animated', 'animate__heartBeat');
    results.innerHTML = `
            <h5>Your are score is ${score} out of ${total} &#${emotion};	
            </h5>
    `;


    // resetting all radio buttons
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(button => {
        button.checked = false;
    } );


    return false;
}