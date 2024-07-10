// JavaScript to handle scroll event and add the fade-in effect
document.addEventListener('DOMContentLoaded', function() {
    const fadeInElements = document.querySelectorAll('.fade-in-element');
  
    const fadeInOnScroll = () => {
      fadeInElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (elementTop < viewportHeight - 50) {
          element.classList.add('fade-in');
        }
      });
    };
  
    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Initial check on page load
  });