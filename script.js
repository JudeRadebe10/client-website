const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

function openGalleryPage() {
    // Get the clicked image source
    const imgSrc = event.target.src;
    window.open(imgSrc, '_blank');
  }
  