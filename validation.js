const form = document.getElementById('searchForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const submitButton = document.getElementById('submit');

function validateForm() {
    const isValid = firstNameInput.value.trim() !== '' && lastNameInput.value.trim() !== '';
    submitButton.disabled = !isValid;
    if (isValid) {
        submitButton.style.backgroundColor = '#3498db';
    } else {
        submitButton.style.backgroundColor = '#cccccc';
    }
}

firstNameInput.onchange = validateForm;
lastNameInput.onchange = validateForm;