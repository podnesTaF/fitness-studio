// Author: Dominykas

// reference for the BMI Categories: https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm

function calculateBMI() {
    // Defining variables for calculations (height and weight input) and results window
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultDiv = document.querySelector('.result');

    const height = heightInput.value / 100; // get the height value and convert it to cm
    const weight = weightInput.value; //
    if (height && weight) {
        const bmi = weight / (height * height); // calculate BMI
        const bmiRounded = bmi.toFixed(1); // round BMI to 1 number after comma
        // define variables for output
        let category = '';
        let color = '';
        // define different outputs depending on the result.
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
        // Display results in div based on the results and color
        resultDiv.innerHTML = `Your BMI is <span style="color: ${color}">${bmiRounded}</span>, which is ${category}.`;
    } else {
        resultDiv.innerHTML = 'Please enter your height and weight.';
    }
}

// Tab buttons to switch between displayed content
// Define each button with the event listener of click
document.addEventListener('DOMContentLoaded', function () {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');

    button1.addEventListener('click', function () {
        openTab('training-program');
    });

    button2.addEventListener('click', function () {
        openTab('body-types');
    });
    button3.addEventListener('click', function () {
        openTab('bmi-calculator');
    });
});

function openTab(tabName) {
    // Function selects elements by class name 'diet-tab'
    const tabs = document.getElementsByClassName('diet-tab');
    // for all tabs display none is added
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.add('d-none');
    }
    // selected tab gets display none removed
    const selectedTab = document.getElementById(tabName);
    selectedTab.classList.remove('d-none');
}
