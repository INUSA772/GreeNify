   // Mobile Menu Toggle
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Video fallback for mobile
        const heroVideo = document.querySelector('.hero video');
        if (window.innerWidth < 768) {
            heroVideo.style.display = 'none';
            document.querySelector('.hero').style.backgroundImage = 'url(https://images.unsplash.com/photo-1509440159596-0249088772ff)';
        }
        //  initialize dynamic badges
document.addEventListener('DOMContentLoaded', function() {
  // Example of dynamic badge assignment
  const farmerCards = document.querySelectorAll('.farmer-card');
  
  farmerCards.forEach(card => {
    const badge = card.querySelector('.verification-badge');
    if (badge) {
      // Get badge type from data attributes or API
      const farmerType = card.dataset.farmerType || 'verified';
      badge.setAttribute('data-badge-type', farmerType);
      
      // Update alt text for accessibility
      badge.alt = `${farmerType.replace('-', ' ')} verified farmer`;
    }
  });
});