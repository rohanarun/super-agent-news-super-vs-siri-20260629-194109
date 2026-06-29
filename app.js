(function () {
  try {
    if (window.gsap) {
      gsap.from('.hero h1', { opacity: 0, y: 40, duration: 1, ease: 'power3.out' });
      gsap.from('.hero-sub', { opacity: 0, y: 20, duration: 1, delay: 0.2 });
    }
  } catch (e) {
    // graceful fallback
  }
})();