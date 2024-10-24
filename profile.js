// function toggleEdit() {
//     const editForm = document.getElementById('edit-form');
//     editForm.classList.toggle('hidden');

//     // Populate fields with current profile info
//     if (!editForm.classList.contains('hidden')) {
//         const userData = document.getElementById('username').innerText.split(' - ');
//         document.getElementById('name').value = userData[0] || '';
//         document.getElementById('age').value = userData[1] || '';
//         document.getElementById('hobbies').value = userData[2] || '';
//         document.getElementById('school').value = userData[3] || '';
//         document.getElementById('grade').value = userData[4] || '';
//         document.getElementById('favorite-subject').value = userData[5] || '';
//     }
// }

// function saveProfile() {
//     const name = document.getElementById('name').value;
//     const age = document.getElementById('age').value;
//     const hobbies = document.getElementById('hobbies').value;
//     const school = document.getElementById('school').value;
//     const grade = document.getElementById('grade').value;
//     const favoriteSubject = document.getElementById('favorite-subject').value;

//     // Save profile info
//     const username = `${name} - ${age} - ${hobbies} - ${school} - ${grade} - ${favoriteSubject}`;
//     document.getElementById('username').innerText = username;
    
//     // Hide the edit form
//     toggleEdit();
// }

// function previewPhoto() {
//     const file = document.getElementById('upload-photo').files[0];
//     const reader = new FileReader();

//     reader.onload = function(e) {
//         document.getElementById('profile-pic').src = e.target.result;
//     }

//     if (file) {
//         reader.readAsDataURL(file);
//     }
// }


// Toggle the edit form visibility
function toggleEdit() {
    const editForm = document.getElementById('edit-form');
    editForm.classList.toggle('hidden');
}

// Preview the uploaded profile picture
function previewPhoto() {
    const fileInput = document.getElementById('upload-photo');
    const profilePic = document.getElementById('profile-pic');
    
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePic.src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

// Save the profile information (for now, it's just a placeholder for future functionality)
function saveProfile() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const hobbies = document.getElementById('hobbies').value;
    const school = document.getElementById('school').value;
    const grade = document.getElementById('grade').value;
    const favoriteSubject = document.getElementById('favorite-subject').value;

    alert(`Profile saved!
    Name: ${name}
    Age: ${age}
    Hobbies: ${hobbies}
    School: ${school}
    Grade: ${grade}
    Favorite Subject: ${favoriteSubject}`);

    toggleEdit();
}
