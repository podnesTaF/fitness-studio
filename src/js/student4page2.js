// Author: Dominykas Raila

const formControls = document.querySelectorAll('.is-invalid');

formControls.forEach((formControl) => {
    formControl.addEventListener('input', () => {
        if (formControl.type === 'email') {
            if (formControl.value.includes('@')) {
                formControl.classList.remove('is-invalid');
            } else {
                formControl.classList.add('is-invalid');
            }
        } else {
            if (formControl.value.trim() !== '') {
                formControl.classList.remove('is-invalid');
            } else {
                formControl.classList.add('is-invalid');
            }
        }
    });
});
