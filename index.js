document.addEventListener("DOMContentLoaded", () => {
  // Initialize animations
  setTimeout(() => {
    document.querySelector('.slide-top').classList.add('visible');
  }, 500);

  // Initialize AOS animation
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });

  // Mobile menu toggle
  document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  });

  // Preloader
  window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  });

  // Geolocation functionality
  const geoMarquee = document.getElementById("demo");
  
  // Make geolocation available on click
  geoMarquee.addEventListener('click', getLocation);

  function getLocation() {
    if (navigator.geolocation) {
      geoMarquee.innerHTML = "Fetching location...";
      navigator.geolocation.getCurrentPosition(
        showPosition,
        showError,
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      geoMarquee.innerHTML = "Geolocation is not supported by this browser";
    }
  }

  function showPosition(position) {
    geoMarquee.innerHTML = `Latitude: ${position.coords.latitude.toFixed(4)} 
                          Longitude: ${position.coords.longitude.toFixed(4)}`;
  }

  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        geoMarquee.innerHTML = "User denied location request";
        break;
      case error.POSITION_UNAVAILABLE:
        geoMarquee.innerHTML = "Location unavailable";
        break;
      case error.TIMEOUT:
        geoMarquee.innerHTML = "Request timed out";
        break;
      case error.UNKNOWN_ERROR:
        geoMarquee.innerHTML = "Unknown error occurred";
        break;
    }
  }
});
