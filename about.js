//  Initialize AOS animation 
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
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }, 1000);
    });

    // Filter projects
    const filters = document.querySelectorAll('.project-filter');
    filters.forEach(filter => {
      filter.addEventListener('click', function() {
        filters.forEach(f => f.classList.remove('active'));
        this.classList.add('active');
      });
    });


 var x = document.getElementById("demo");

function geolocation() {
    if(navigator.geolocation){

 navigator.geolocation.getCurrentPosition(showposition);

    }
    else{


x.innerHTML = " location not available"
  x.style.display = "block";
    }




}
        function showposition(position){
     x.innerHTML = "latitude: " + position.coords.latitude +" longitude: " + position.coords.longitude
     x.style.display = "block";

} 
