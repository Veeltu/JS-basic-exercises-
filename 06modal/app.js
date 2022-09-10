const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const modalOver = document.querySelector('.modal-overlay');

modalBtn.addEventListener('click', function(){
    // console.log('himan');
    modalOver.classList.add('open-modal');
});

closeBtn.addEventListener('click', function(){
    modalOver.classList.remove('open-modal');
})


