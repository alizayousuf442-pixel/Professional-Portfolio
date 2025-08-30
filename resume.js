   function geolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const marquee = document.getElementById('demo');
    marquee.textContent = `Latitude: ${lat.toFixed(6)}, Longitude: ${lon.toFixed(6)}`;
  }

  function showError(error) {
    const marquee = document.getElementById('demo');
    switch(error.code) {
      case error.PERMISSION_DENIED:
        marquee.textContent = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        marquee.textContent = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        marquee.textContent = "The request to get user location timed out.";
        break;
      default:
        marquee.textContent = "An unknown error occurred.";
        break;
    }
  }
      // Mobile menu toggle
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
      document.getElementById('mobile-menu').classList.toggle('hidden');
    });
    // Initialize AOS
    AOS.init({ duration: 1200, once: true });

    // Preloader
    window.addEventListener("load", () => {
      document.getElementById("preloader").style.display = "none";
    });