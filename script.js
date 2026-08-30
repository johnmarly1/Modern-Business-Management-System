document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const button = form.querySelector('button[type="submit"]');
      button.disabled = true;
      button.textContent = 'Message Sent';
      button.classList.remove('btn-primary');
      button.classList.add('btn-success');

      setTimeout(() => {
        form.reset();
        button.disabled = false;
        button.textContent = 'Send Message';
        button.classList.remove('btn-success');
        button.classList.add('btn-primary');
      }, 2000);
    });
  }
});
