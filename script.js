(() => {
  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', navLinks.classList.contains('active'));
  });

  // Close mobile nav when any link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Navigate to About page
  const aboutLink = document.getElementById('about-link'); // Ensure your link has this ID
  if (aboutLink) {
    aboutLink.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      window.location.assign('about.html');
    });
  }

  // Open image in a new tab from gallery
  function openGalleryPage(event) {
    const imgSrc = event.target.src;
    window.open(imgSrc, '_blank', 'noopener');
  }

  // Attach gallery click and keyboard listeners dynamically
  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', openGalleryPage);
    img.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openGalleryPage(e);
      }
    });
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', 'Open image in new tab');
  });

  // Optional scrollVideos function
  function scrollVideos(direction) {
    const container = document.getElementById('videoSlider');
    const scrollAmount = 320;
    if (container) {
      container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  }
// initialize image swiper 
// Initialize Swiper for image product slider
const imageSwiper = new Swiper('.image-swiper', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    640: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

  // Initialize Swiper for video slides
  const swiper = new Swiper('.video-swiper', {
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    on: {
      init: function () {
        handleVideoPlay(this.slides[this.activeIndex]);
      },
      slideChangeTransitionStart: function () {
        pauseAllVideos();
      },
      slideChangeTransitionEnd: function () {
        handleVideoPlay(this.slides[this.activeIndex]);
      }
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }
  });

  function pauseAllVideos() {
    document.querySelectorAll('.video-swiper video').forEach(video => {
      video.pause();
      video.currentTime = 0;
    });
  }

  function handleVideoPlay(activeSlide) {
    const video = activeSlide.querySelector('video');
    if (video) {
      video.play().catch(err => {
        console.warn("Autoplay blocked:", err);
      });
    }
  }

})();
