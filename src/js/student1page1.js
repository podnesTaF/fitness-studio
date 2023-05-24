// Author: Oleksii Pidnebesnyi r0934777


// Sale timer
const countDownDate = new Date().getTime() + 1000 * 60 * 60 * 24;

const timer = setInterval(function() {

    const now = new Date().getTime();

    const distance = countDownDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.hours h1').innerHTML = hours > 9 ? hours : `0${hours}`;
    document.querySelector('.minutes h1').innerHTML = minutes > 9 ? minutes : `0${minutes}`;
    document.querySelector('.seconds h1').innerHTML = seconds > 9 ? seconds : `0${seconds}`;

    if (distance < 0) {
        clearInterval(timer);
        document.querySelector('.timer-wrapper').innerHTML = "<h3 class='fs-3 text-uppercase'>Sale has ended.</h3>";
    }
}, 1000);

// Sale animation

const saleImg = document.querySelector('.sale-img');
const saleContent = document.querySelector('.sale-wrapper');
window.addEventListener('scroll', () => {
    const saleContentPosition = saleContent.getBoundingClientRect().top;
    if(saleContentPosition < 800) {
        saleImg.style.transform = `translateX(0)`;
        saleContent.style.transform = `translateX(0)`;
    } else {
        saleImg.style.transform = `translateX(-100%)`;
        saleContent.style.transform = `translateX(100%)`;
    }
});
