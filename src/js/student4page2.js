// Author: Dominykas Raila

const formControls = document.querySelectorAll('.is-invalid');
// Validation of the form if the correct input is provided
formControls.forEach((formControl) => {
    // take input of the form
    formControl.addEventListener('input', () => {
        // check if the email form input includes @
        if (formControl.type === 'email') {
            if (formControl.value.includes('@')) {
                formControl.classList.remove('is-invalid');
            } else {
                formControl.classList.add('is-invalid');
            }
            // check if defined classes has any input
        } else {
            if (formControl.value.trim() !== '') {
                formControl.classList.remove('is-invalid');
            } else {
                formControl.classList.add('is-invalid');
            }
        }
    });
});
