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