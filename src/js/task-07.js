const inputFontChange = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');
inputFontChange.addEventListener('change', event => {
    text.style.fontSize = event.target.value + 'px'
})

