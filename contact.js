// JavaScript for mobile menu toggle
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
        // Animate mobile menu entrance/exit (optional, requires more CSS)
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.style.maxHeight = '0';
        } else {
            mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
        }
    });

    // JavaScript for FAQ accordion
    document.addEventListener('DOMContentLoaded', () => {
        const faqQuestions = document.querySelectorAll('.faq-question');

        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const icon = question.querySelector('.faq-icon');

                // Toggle active class on the answer for max-height and padding transition
                answer.classList.toggle('active');
                // Toggle rotation of the icon
                icon.classList.toggle('rotate');

                // Close other open FAQ items (optional, but good UX)
                faqQuestions.forEach(otherQuestion => {
                    if (otherQuestion !== question) {
                        const otherAnswer = otherQuestion.nextElementSibling;
                        const otherIcon = otherQuestion.querySelector('.faq-icon');
                        if (otherAnswer.classList.contains('active')) {
                            otherAnswer.classList.remove('active');
                            otherIcon.classList.remove('rotate');
                        }
                    }
                });
            });
        });
    });
  document.getElementById("MyInput").addEventListener("submit", function (e) {
    // Delay reset to allow submission
    setTimeout(() => {
      this.reset();
    }, 500); // delay to let Formspree catch data
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
   // Mobile menu toggle
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    });
    
    // Form submission
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });