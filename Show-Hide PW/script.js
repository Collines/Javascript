var password = document.getElementById('main').firstElementChild,
    checkbox = document.getElementById('main').lastElementChild;

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

function showOrHidePw(element) {
    'use strict';
    if(element.getAttribute('type') == 'password') {
        element.setAttribute('type','text');
    }
    else {
        element.setAttribute('type','password');
    }
}

    
hidePlaceholder(password);

/*checkbox.onclick = function() {
    'use strict';
    if(password.getAttribute('type') == 'password') {
        password.setAttribute('type','text');
    }
    else {
        password.setAttribute('type','password');
    }
};*/

checkbox.onclick = showOrHidePw(password);