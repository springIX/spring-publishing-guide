document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab-link');
  const contents = document.querySelectorAll('.tab');

  tabs.forEach(tab => {
    console.log(tab);
      tab.addEventListener('click', function() {
          // Remove active class from all tabs and contents
          tabs.forEach(t => t.classList.remove('active'));
          contents.forEach(c => c.classList.remove('active'));

          // Add active class to the clicked tab and corresponding content
          tab.classList.add('active');
          document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
      });
  });
});
