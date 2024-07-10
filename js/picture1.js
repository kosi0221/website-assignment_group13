document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.getElementById('main-image1');
    const thumbnails = document.querySelectorAll('.thumbnailL');
  
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
        });
    });
  });