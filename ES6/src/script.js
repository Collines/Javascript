import Person from './Person';

var password = document.getElementById('main').firstElementChild,
    checkbox = document.getElementById('main').lastElementChild,
    label = document.getElementById('main').querySelector('#main label');

function hidePlaceholder(element) {
    'use strict';
    var myPlaceholder = element.getAttribute('placeholder');
    element.onfocus = function() {
        'use strict';
        this.setAttribute('placeholder', '');
    };

    element.onblur = function() {
        'use strict';
        this.setAttribute('placeholder', myPlaceholder);
    };
}

hidePlaceholder(password);

checkbox.onclick = function() {
    'use strict';
    if(password.getAttribute('type') === 'password' && label.textContent == 'Show password:') {
        password.setAttribute('type','text');
        label.textContent = 'Hide password:'
    }
    else {
        password.setAttribute('type','password');
        label.textContent = 'Show password:';
    }
};

let person = new Person('John', 'Smith');
person.speak('Hello!');

const people = [];
for (let i = 0; i < 10; i++) {
    let someone = new Person(`Person ${i}`);
    people.push(someone); // array insert
}

people.forEach((person) => {
    person.speak('Hello from forEach!');
});
