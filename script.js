$(document).ready(function () {
    // Mobile Menu Toggle
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('active');
    });

    // Active link switching on scroll
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('active');

        if ($(window).scrollTop() > 60) {
            $('#scroll-top').addClass('active');
        } else {
            $('#scroll-top').removeClass('active');
        }

        $('section').each(function () {
            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if (top >= offset && top < offset + height) {
                $('.navbar a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // Typed.js Initialization
    new Typed('.typing-text', {
        strings: ['Data Scientist', 'Python Full Stack Developer'],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
    });

    // Vanilla-Tilt.js Initialization
    VanillaTilt.init(document.querySelectorAll('.tilt'), {
        max: 25,
    });

    // ScrollReveal Initialization
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    sr.reveal('.home .content, .heading', {});
    sr.reveal('.home .image, .about .image, .projects .box-container', { origin: 'bottom' });
    sr.reveal('.about .content, .skills .container', { origin: 'left' });
    sr.reveal('.education .box, .experience .container', { interval: 200 });

    // Particles.js Initialization
    particlesJS('particles-js', {
      "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
        "opacity": { "value": 0.5, "random": false, "anim": { "enable": false } },
        "size": { "value": 3, "random": true, "anim": { "enable": false } },
        "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
        "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } }
      },
      "retina_detect": true
    });
});

