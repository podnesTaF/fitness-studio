// Author: Dominykas

function calculateBMI() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultDiv = document.querySelector('.result');

    const height = heightInput.value / 100;
    const weight = weightInput.value;

    if (height && weight) {
        const bmi = weight / (height * height);
        const bmiRounded = bmi.toFixed(1);
        let category = '';
        let color = '';

        if (bmi < 18.5) {
            category = 'Underweight';
            color = 'orange';
        } else if (bmi < 25) {
            category = 'Normal weight';
            color = 'green';
        } else if (bmi < 30) {
            category = 'Overweight';
            color = 'orange';
        } else {
            category = 'Obese';
            color = 'red';
        }

        resultDiv.innerHTML = `Your BMI is <span style="color: ${color}">${bmiRounded}</span>, which is ${category}.`;
    } else {
        resultDiv.innerHTML = 'Please enter your height and weight.';
    }
}
