
const btn = document.getElementById('btn');
btn.addEventListener('click', function onClick(event) {
    const backgroundColor = document.body.style.backgroundColor;

    if (backgroundColor === 'tan') {
        document.body.style.backgroundColor = 'brown';

    } else {
        document.body.style.backgroundColor = 'tan';

    }
    // document.body.style.backgroundColor = 'tan';
});

const text = document.querySelector('.bio');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 25);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
        OfflineAudioCompletionEvent();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}