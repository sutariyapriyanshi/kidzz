const poemElements = document.querySelectorAll('.poem-content p');

poemElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.5}s`;
});