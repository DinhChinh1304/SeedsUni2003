let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item');
    let thumbnailItems = document.querySelectorAll('.thumbnail .item');
    let newItem = direction === 'next' ? sliderItems[0] : sliderItems[sliderItems.length - 1];
    let newThumbnailItem = direction === 'next' ? thumbnailItems[0] : thumbnailItems[thumbnailItems.length - 1];
    
    if (direction === 'next') {
        sliderList.appendChild(newItem);
        thumbnail.appendChild(newThumbnailItem);
    } else {
        sliderList.prepend(newItem);
        thumbnail.prepend(newThumbnailItem);
    }

    // Handle class changes for animation
    slider.classList.add(direction);
    slider.addEventListener('animationend', function () {
        slider.classList.remove(direction);
    }, { once: true });
}
