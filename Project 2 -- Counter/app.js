// setting the initial count
let count = 0;

// select id value and class button
let value = document.getElementById('value');
let btnOne = document.getElementById('dec');
let btnTwo = document.getElementById('res');
let btnThree = document.getElementById('inc');

// console.log(btns);
btnOne.addEventListener('click', function () {
    count--;
    value.innerHTML = count;
})
btnTwo.addEventListener('click', function () {
    count = 0;
    value.innerHTML = count;
})
btnThree.addEventListener('click', function () {
    count++;
    value.innerHTML = count;
})