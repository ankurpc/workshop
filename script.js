// Scroll to Contact Section
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Contact Form Submission
function submitForm(event) {
  event.preventDefault();
  alert("Thank you! Your message has been sent.");
  document.getElementById("contactForm").reset();
}

// Scroll-based animation trigger
const animateElements = document.querySelectorAll('.card, .about, .team, .member, .contact');

function checkAnimation() {
  const triggerBottom = window.innerHeight * 0.85;

  animateElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if(elementTop < triggerBottom){
      el.style.opacity = 1;
      el.style.transform = 'translateY(0) translateX(0)';
      el.style.transition = 'all 1s ease-out';
    }
  });
}

window.addEventListener('scroll', checkAnimation);
window.addEventListener('load', checkAnimation);
