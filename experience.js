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
    } // Preloader
    window.addEventListener("load", () => {
      document.getElementById("preloader").style.display = "none";
    });

   // Mobile Menu Toggle
    const mobileButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    mobileButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    
    
    
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
  AOS.init({ duration: 1000 });
  
  // Preloader
  window.addEventListener('load', function() {
    document.getElementById('preloader').style.display = 'none';
  });
