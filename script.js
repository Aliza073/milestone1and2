var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skills.style.direction === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});