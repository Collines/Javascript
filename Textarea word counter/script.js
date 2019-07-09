var textArea = document.getElementById('main').firstElementChild,
    maxLength = textArea.getAttribute('maxlength'),
    outPut = document.getElementById('output');

textArea.oninput = function() {
  'use strict';
    
    outPut.textContent = this.value.length + '/'+ maxLength + ' Characters';
    if(this.value.length >= maxLength){
        outPut.classList.add('warn');
    }
    else {
        outPut.classList.remove('warn');
    }
};