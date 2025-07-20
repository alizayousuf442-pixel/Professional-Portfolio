  // Preloader
    window.addEventListener('load', function() {
      const preloader = document.getElementById('preloader');
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }, 1000);
    });

    // Mobile menu toggle
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
      document.getElementById('mobile-menu').classList.toggle('hidden');
    });

    // Geolocation for marquee
    function geolocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function(position) {
            const latitude = position.coords.latitude.toFixed(4);
            const longitude = position.coords.longitude.toFixed(4);
            document.getElementById('demo').textContent = 
              `Latitude: ${latitude} • Longitude: ${longitude}`;
          },
          function(error) {
            console.error("Error getting location:", error);
            document.getElementById('demo').textContent = 
              "Location access denied or not available";
          }
        );
      } else {
        document.getElementById('demo').textContent = 
          "Geolocation is not supported by this browser";
      }
    }