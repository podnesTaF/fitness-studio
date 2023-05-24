// Author: Oleksii Pidnebesnyi r0934777;

const questCards = document.querySelectorAll('.quest-card');
const policyCards = document.querySelectorAll('.policy-cards .card');

window.addEventListener('scroll', () => {
    questCards.forEach((card) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        if(screenPosition - cardPosition > 50) {
            card.style.transform = `translateX(0)`;
        } else {
            card.style.transform = `translateX(-100%)`;
        }
    })

    policyCards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        const delay = (index + 1) * 100; // adjust delay time here
        const width = window.innerWidth;
        const height = width > 980 ? policyCards[0].scrollHeight : card.scrollHeight;

        if(screenPosition - cardPosition > 50) {
            setTimeout(() => {
                card.style.height = `${height}px`;
            }, delay);
        } else {
            card.style.height = `0`;
        }
    })
})

