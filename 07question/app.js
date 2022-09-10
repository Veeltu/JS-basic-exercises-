 let btns = document.querySelectorAll('.question-btn');

 btns.forEach(function(btn){
     btn.addEventListener('click', function(e){
         const question = e.currentTarget.parentElement.parentElement;
         question.classList.toggle('show-text');
     });
 });

//const questions = document.querySelectorAll('.questions');
//
//questions.forEach(function(question){
//    // console.log(question);
//    const btn = question.querySelector('question-btn');
//    console.log(btn);
//});

