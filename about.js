  
      // Select button and menu
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  // Toggle menu visibility on button click
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
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
    // Init AOS
    AOS.init({ duration: 1200, once: true });

    // Preloader
    window.addEventListener("load", () => {
      document.getElementById("preloader").style.display = "none";
    });
  
    // Typewriter Animation
    const text = "Welcome to My Portfolio";
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        document.getElementById("typewriter").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 120);
      }
    }
    window.onload = typeWriter;
  