// Author: Oleksii Pidnebesnyi r0934777

const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.nav ul li a');
const navLogo = document.querySelector('.nav__logo');


// slow down intro video if located in index.html
const slowDownVideo = () => {
    const introVideo = document.querySelector('.fixed-video');
    introVideo.playbackRate = 0.8;
};

if(location.pathname === '/index.html') {
    slowDownVideo();
}

// handle active link
const path = window.location.pathname.split('/').pop();
links.forEach((link) => {
    if (link.href.split('/').pop() === path) {
        link.classList.add('active');
    }
})

// Burger Menu
const menu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.burger-icon');
const closeBtn = document.querySelector('.menu-header i');
const menuNav = menu.querySelector('.menu-nav')

const closeMenu = () => {
    menu.style.animation = 'menuBackAnimate 0.5s ease-in-out';
    setTimeout(() => {
        menu.style.display = 'none';
        burgerBtn.style.visibility = 'visible';
    }, 500)
}

const openMenu = () => {
    menu.style.animation = 'menuAnimate 0.5s ease-in-out'
    menu.style.display = 'block'
    burgerBtn.style.visibility = 'hidden';
}

burgerBtn.addEventListener('click', openMenu);

closeBtn.addEventListener('click', () => {
    closeMenu();
});
menu.addEventListener('click', () => {
    closeMenu()
});
menuNav.addEventListener('click', (e) => e.stopPropagation());



// Header scroll effects
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        nav.classList.add('nav--light');
        if(location.pathname === '/index.html') {
            navLogo.style.display = 'block';
        }
        menu.classList.add('light')
        links.forEach(link => {
            link.classList.add('dark');
        })
    if(window.scrollY > window.screen.height / 1.2) {
      nav.querySelector('ul').style.padding = '1rem 0';
    } else {
      nav.querySelector('ul').style.padding = '2rem 0';
    }
    } else {
        nav.classList.remove('nav--light');
        if(location.pathname === '/index.html') {
            navLogo.style.display = 'none'
        }
        menu.classList.remove('light')
        links.forEach(link => {
            link.classList.remove('dark');
        })
    }
})



// Motivation loop

const motivationCards = document.querySelectorAll('.motivation__explore-card')

motivationCards.forEach(card => {
    card.addEventListener('click', () => {
      const description = card.querySelector('.description')
      if (card.classList.contains('expanded')) {
        description.style.height = '0'
        card.classList.remove('expanded')
        card.querySelector('i').classList.remove('fa-chevron-up')
        card.querySelector('i').classList.add('fa-chevron-down')
      } else {
        const height = description.scrollHeight
        description.style.height = height + 'px'
        card.classList.add('expanded')
        card.querySelector('i').classList.remove('fa-chevron-down')
        card.querySelector('i').classList.add('fa-chevron-up')
      }
    })
})


// Carousel cards (main && membership pages)

const prevBtn = document.querySelector('.slider__wrapper .left');
const nextBtn = document.querySelector('.slider__wrapper .right');
const slider = document.querySelector('.slider__carousel');
const slideCards = document.querySelectorAll('.slider__carousel-item');
const slideDistance = slideCards[0]?.offsetWidth;

let currActiveIdx = 0;

const slide = (direction) => {
    slideCards[currActiveIdx].classList.remove('active');

    if (direction === 'prev' && currActiveIdx > 0) {
        currActiveIdx--;
        slider.style.transform = `translateX(${slideDistance * currActiveIdx * -1}px)`;
        nextBtn.style.display = 'block'
        if(currActiveIdx === 0) {
            prevBtn.style.display = 'none'
        }
    } else if (direction === 'next' && currActiveIdx < slideCards.length - 1) {
        currActiveIdx++;
        slider.style.transform = `translateX(${slideDistance * currActiveIdx * -1}px)`;
        prevBtn.style.display = 'block'
        if(currActiveIdx === slideCards.length - 1) {
            nextBtn.style.display = 'none'
        }
    }

    slideCards[currActiveIdx].classList.add('active');
};

prevBtn?.addEventListener('click', () => slide('prev'));
nextBtn?.addEventListener('click', () => slide('next'));


// Scroll to top of the page button
window.addEventListener('scroll', () => {
    const scrollButton = document.getElementById('scroll-top-button');
    if (window.scrollY > 500) {
        scrollButton.classList.add('show');
    } else {
        scrollButton.classList.remove('show');
    }
});

document.getElementById('scroll-top-button').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
