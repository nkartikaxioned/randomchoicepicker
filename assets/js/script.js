/* Author: 

*/

const textarea= document.querySelector('.text'), textDisplay= document.querySelector('.text_display');


textarea.addEventListener('keyup',(event) => {
    createElements(event.target.value)

   if(event.key === 'Enter'){
    setTimeout(() => {
      event.target.value='';
    },10);

    randompicker()

   }

})


function createElements (input) {

    const newArray = input.split(',').filter( element => element.trim()).map(element => element.trim());
    
    console.log(newArray);
    textDisplay.innerHTML="";
    
    newArray.forEach(element => {
        const tag = document.createElement('span');
        tag.classList.add('textjs');
        tag.innerText = element;
        textDisplay.append(tag);
    });
}

function randompicker() {

    const timer=30;
    const int =100;

    const interval = setInterval(() => {
        const randomtag=randompickertag();

        highlightTag(randomtag);

        setTimeout(() => {
            unhighlightTag(randomtag)
        },int);

    },int);

    setTimeout(() => {
      clearInterval(interval);

      setTimeout(() => {
          
        const randomtag=randompickertag();

        highlightTag(randomtag);

      },int)

    },int * timer);

}

function randompickertag() {
    const element=document.querySelectorAll('.textjs');
    return element[Math.floor(Math.random() * element.length)];
}

function highlightTag(textjs) {
    textjs.classList.add('highlight')
}

function unhighlightTag(textjs) {
    textjs.classList.remove('highlight')
}













