// Add a toast container to the DOM
(function initializeToastLogger() {
  if (!document.getElementById('toast-container')) {
    const container = document.createElement('div');
    container.id = 'toast-container';
    container.style.position = 'fixed';
    container.style.bottom = '20px';
    container.style.right = '20px';
    container.style.zIndex = '9999';
    document.body.appendChild(container);
  }

  // Toast display function
  function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    toast.style.color = 'white';
    toast.style.padding = '10px 20px';
    toast.style.marginTop = '10px';
    toast.style.borderRadius = '5px';
    toast.style.boxShadow = '0px 2px 6px rgba(0, 0, 0, 0.3)';
    toast.style.animation = 'fadeInOut 4s forwards';

    // Animation setup
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
      container.removeChild(toast);
    }, 4000); // Match animation duration
  }

  // Override console.log
  const originalLog = console.log;
  console.log = function (...args) {
    showToast(args.join(' '));
    originalLog.apply(console, args);
  };
})();
