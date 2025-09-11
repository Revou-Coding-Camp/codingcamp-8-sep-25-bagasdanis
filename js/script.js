function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function selectLocation(element, locationName) {
    // Remove active class from all location circles
    document.querySelectorAll('.location-circle').forEach(circle => {
        circle.classList.remove('active');
    });
    
    // Add active class to clicked circle
    element.classList.add('active');
    
    // Update contact info with selected location
    updateContactInfo(locationName);
}

function updateContactInfo(location) {
    const contactInfo = document.querySelector('.contact-info');
    const locationData = {
        'Jakarta': {
            phone: '0888-5659-3399',
            address: 'Jalan Kahfi1 No 12C,Jakarta,12620'
        },
        'Bandung': {
            phone: '0888 - 222 - 222', 
            address: 'Jalan Raya Bandung No.80, Bandung, 08080'
        },
        'Surabaya': {
            phone: '0888 - 333 - 333',
            address: 'Jalan Pemuda No.45, Surabaya, 60271'
        }
    };

    const data = locationData[location];
    contactInfo.innerHTML = `
        <div><strong>Contact Info:</strong> ${new Date().toString()}</div>
        <div><strong>Name:</strong>Bagas Daniswara Adi</div>
        <div><strong>E-mail:</strong> bagasdanis1104@gmail.com</div>
        <div><strong>Phone Number:</strong> ${data.phone}</div>
        <div><strong>Address:</strong> ${data.address}</div>
    `;
}

function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    alert(`Message submitted!\nName: ${data.name}\nPackage: ${data.package}\nMessage: ${data.message}`);
    
    // Reset form
    event.target.reset();
}

// Initialize with Jakarta selected
window.onload = function() {
    const jakartaCircle = document.querySelector('.location-circle');
    selectLocation(jakartaCircle, 'Jakarta');
};
// Animasi Fade-in Saat Scroll
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".about-section, .projects-section, .testimonial, .location, .contact-form"
  );

  function checkScroll() {
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Cek saat pertama kali load
});

// script.js
document.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
