/*= ========= SHOW MENU ======== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*= ============ MENU SHOW ====== */
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*= =========== MENU HIDDEN ====== */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*= =========== REMOVE MENU MOBILE ====== */
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__linnk, we remove the show-menu class
  navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*= =========== SWIPER PROJECTS ====== */

const swiperProjects = new Swiper('.projects__container', {
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

/*= =========== SWIPER TESTIMONIAL ====== */

const swiperTestimonial = new Swiper('.testimonial__container', {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*= =========== EMAIL JS ====== */
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactProject = document.getElementById('contact-project');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();
  // Check if the field has a value
  if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
    // Add and remove color
    contactMessage.classList.remove('color-blue');
    contactMessage.classList.add('color-red');
    // Show message
    contactMessage.textContent = 'Write all the input fields 📩';
  } else {
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_tbg90qp', 'template_043u7l6', '#contact-form', '6vLF44aJ9K_Hbn5xn')
      .then(() => {
        // Show message and add color
        contactMessage.classList.add('color-blue');
        contactMessage.textContent = 'Message sent ✅';
        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);
      }, (error) => {
        alert('OOPS! SOMETHING HAS FAILED...', error);
      });
    // To clear the input field
    contactName.value = '';
    contactEmail.value = '';
    contactProject.value = '';
  }
};
contactForm.addEventListener('submit', sendEmail);

// /*============ ADD BLUR TO HEADER ======*/
// const blurHeader = () => {
//   const header = document.getElementById('header')
//   // When the scroll is greate than 50 viewport height, and the blur-header class to the header tag
//   this.scrollY >=50 ? header.classList.add('blur-header')
//                     : header.classList.remove('blur-header')
// }
// window.addEventListener('scroll', blurHeader)

// /*============ SHOW SCROLL UP ======*/
const scrollUp = () => {
  const scrollUP = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350 ? scrollUP.classList.add('show-scroll')
    : scrollUP.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

// /*============ SCROLL SECTIONS ACTIVE LINK ======*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionClass = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-link');
    } else {
      sectionClass.classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive);

/*= ============== Variables Dark theme =============== */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-home');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validationg the dark-theme class
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light');
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line');

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
});

/*= ============== Change background header =============== */
const scrollHeader = () => {
  const header = document.getElementById('header');
  // When the scroll is greaterthan 50viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('bg-header')
    : header.classList.remove('bg-header');
};
window.addEventListener('scroll', scrollHeader);
// /*============ SCROLL REVEAL ANIMATION ======*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true // Animation repeat
});
sr.reveal('.home__data, .projects__container, .testimonial__container, .footer__container');
sr.reveal('.home__info div', { delay: 600, origin: 'bottom', interval: 100 });
sr.reveal('.skills__content:nth-child(1), contact__content:nth-child(1)', { origin: 'left' });
sr.reveal('.skills__content:nth-child(2), contact__content:nth-child(2)', { origin: 'right' });
sr.reveal('.qualification__content, .services__card', { interval: '100' });
