var currentSlide= 3,
    sliderimages = document.getElementById('slider-container').querySelectorAll('img'),
    numOfSlides = sliderimages.length,
    prevButton = document.getElementById('previous'),
    nextButton = document.getElementById('next'),
    indicators = document.getElementById('indicators');

    //create indicators
    var indicator = document.createElement('ul');
    for(var i=1; i<=numOfSlides; i++) {
        var li = document.createElement('li');
        li.setAttribute('index-num',i);
        li.appendChild(document.createTextNode(i));
        indicator.appendChild(li);
    }
    indicators.appendChild(indicator);

    var listItems = indicators.querySelectorAll('ul li');

function checkIndex() {

    if(currentSlide >= numOfSlides) {
        currentSlide = numOfSlides;
        nextButton.classList.add('disabled');
        prevButton.classList.remove('disabled');
    }
    else if(currentSlide <= 0 || currentSlide === 1) {
        currentSlide = 1;
        prevButton.classList.add('disabled');
        nextButton.classList.remove('disabled');
    }
    else
    {
        prevButton.classList.remove('disabled');
        nextButton.classList.remove('disabled');
    }
        removeActives();
        document.getElementById('slider-number').textContent = 'Slider #' + currentSlide + '/'+ numOfSlides;
        sliderimages[currentSlide-1].classList.add('active');

        listItems[currentSlide-1].classList.add('active');
}

function removeActives() {
    sliderimages.forEach(function(e) {
        e.classList.remove('active');
    });

    listItems.forEach(function(l) {
        l.classList.remove('active');
    })
}

checkIndex();

for(var i=0; i<listItems.length; i++) {
    debugger;
    listItems[i].onclick = function() {
        currentSlide = parseInt(this.getAttribute('index-num'));
        checkIndex();
    };
}

prevButton.onclick = function() {

    if(currentSlide <= 1) {
        return;
    }
    else {
        currentSlide--;
        checkIndex();
    }
};

nextButton.onclick = function() {
    if(currentSlide >= numOfSlides) {
        this.classList.add('disabled');
        return;
    }
    else {
        currentSlide++;
        checkIndex();
    }

};