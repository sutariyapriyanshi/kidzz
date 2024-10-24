// Get the sidebar and toggle icon
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');

// Event listener to open and close the sidebar
sidebarToggle.addEventListener('click', function() {
    sidebar.classList.toggle('open');
});


// close button (span)
const closeButton = document.querySelector('#sidebar span');

// Event listener to close the sidebar when the close button (×) is clicked
closeButton.addEventListener('click', function() {
    sidebar.classList.remove('open');  // Remove the 'open' class to hide the sidebar
});
