// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = navToggle.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('active'));
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        
        // Remove active class from toggle spans
        const spans = navToggle.querySelectorAll('span');
        spans.forEach(span => span.classList.remove('active'));
        
        // Add active class to clicked link and remove from others
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});

// Highlight active section on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
    
    // Shrink navbar on scroll
    const navbar = document.querySelector('.navbar');
    if (scrollPosition > 100) {
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.padding = '15px 0';
    }
});

// Form submission
const appointmentForm = document.getElementById('appointmentForm');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(appointmentForm);
        const formDataObj = {};
        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });
        
        // Here you would normally send the data to a server
        console.log('Form submitted with data:', formDataObj);
        
        // Show success message
        let successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Appointment request sent successfully! We will contact you shortly.';
        
        // Insert success message before the form
        appointmentForm.parentNode.insertBefore(successMessage, appointmentForm);
        successMessage.style.display = 'block';
        
        // Reset form
        appointmentForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set the first link as active by default
    navLinks[0].classList.add('active');
    
    // Add active class to toggle spans for animation
    const spans = navToggle.querySelectorAll('span');
    spans.forEach(span => {
        span.classList.add('active-span');
    });
});