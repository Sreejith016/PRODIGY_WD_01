// Wait for the DOM to fully load before executing JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Get the navbar element
    var navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Function to add or remove the "navbar-scrolled" class based on scroll position
    function handleScroll() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    }

    // Add scroll event listener to window
    window.addEventListener("scroll", handleScroll);

    // Add hover event listeners to each menu item
    var menuItems = navbar.getElementsByTagName("a");
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("mouseenter", function() {
            this.style.backgroundColor = "#226A80"; // Change background color on hover
            this.style.color = "#fff"; // Change font color on hover
        });

        menuItems[i].addEventListener("mouseleave", function() {
            this.style.backgroundColor = "transparent"; // Restore background color on mouseout
            this.style.color = "#000"; // Restore font color on mouseout
        });
    }
});
