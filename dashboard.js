document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const section = card.querySelector('h3').textContent;
        
        if (section === 'Games') 
        {
            window.location.href = 'game.html';  // Redirect to game.html
        } 
        else if (section === 'Puzzle') 
        {
            window.location.href = 'puzzle.html';  // Redirect to puzzle.html (if you have a puzzle.html)
        } 
        else if (section === 'Story')
        {
            window.location.href = 'story.html';
        }
        else if (section === "Riddle")
        {
            window.location.href = 'riddles.html';
        }
        else if (section === "Video")
        {
            window.location.href = 'video.html';
        }
        else if (section === "Poem")
        {
            window.location.href = 'poem.html';
        }
        else if (section === "Learning")
        {
            window.location.href = 'learn.html';
        }
        else if (section === "Knowledge")
        {
            window.location.href = 'knowledge.html';
        }
        else if (section === "Books")
        {
            window.location.href = 'book.html';
        }
        else 
        {
            alert(`No page found for ${section}!`);
        }
    });
});


// Optional: Change Learning Style
const learningStyleSelect = document.getElementById('learning-style-select');
learningStyleSelect.addEventListener('change', (event) => {
    const selectedStyle = event.target.value;
    alert(`You selected: ${selectedStyle}`);
});
