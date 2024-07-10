document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.getElementById('main-image2');
    const thumbnails = document.querySelectorAll('.thumbnailLL');
  
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
        });
    });
  });