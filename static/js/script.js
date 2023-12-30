document.addEventListener('DOMContentLoaded', function() {
    const zoomableImages = document.querySelectorAll('.zoomable');
  
    zoomableImages.forEach(function(image) {
      image.addEventListener('click', function() {
        showZoomedImage(image.src);
      });
    });
  
    function showZoomedImage(src) {
      const zoomedContainer = document.createElement('div');
      zoomedContainer.classList.add('zoomed');
  
      const zoomedImage = document.createElement('img');
      zoomedImage.src = src;
  
      zoomedContainer.appendChild(zoomedImage);
      document.body.appendChild(zoomedContainer);
  
      zoomedContainer.addEventListener('click', function() {
        document.body.removeChild(zoomedContainer);
      });
    }
  });
  