document.addEventListener('DOMContentLoaded', function() {

    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');
    const navLinks = document.querySelectorAll('nav ul li a');


    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            event.preventDefault();
            const sectionId = link.getAttribute('href').slice(1);
            const section = document.getElementById(sectionId);

            smoothScrollTo(section);
        });
    });


    function smoothScrollTo(target) {
        const startPosition = window.pageYOffset;
        const targetPosition = target.getBoundingClientRect().top + startPosition;
        let distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, 1000);
            window.scrollTo(0, run);
            if (timeElapsed < 1000) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }


    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        if (!isValidEmail(email)) {
            alert('Будь ласка, введіть дійсну адресу електронної пошти.');
            return;
        }

    }) 
})