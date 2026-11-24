(function () {
  var button = document.querySelector('.theme-toggle');
  if (!button) return;

  function updateButton() {
    button.setAttribute('aria-pressed', String(document.documentElement.getAttribute('data-theme') === 'dark'));
  }

  updateButton();
  button.addEventListener('click', function () {
    var dark = document.documentElement.getAttribute('data-theme') !== 'dark';
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    updateButton();
    try {
      localStorage.setItem('huxing-academic-theme', dark ? 'dark' : 'light');
    } catch (e) { /* Switching still works for this page when storage is unavailable. */ }
  });
}());
