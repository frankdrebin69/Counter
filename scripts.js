let addition = document.getElementById('increase');
let elimination = document.getElementById('decrease');
let count = document.getElementById('szám');
let counter = 0;

addition.addEventListener('click', function(){
    counter += 1;
    count.innerHTML = counter;
})

elimination.addEventListener('click', function(){
        counter -= 1;
        count.innerHTML = counter;
    })

 