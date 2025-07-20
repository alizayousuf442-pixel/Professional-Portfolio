
 // Get references to the elements
    let startedpage = document.getElementById("GetStarted");
   
    // Initial setup when the page loads
    window.onload = function() {
        // Ensure GetStarted is visible and homepage is hidden initially
        if (startedpage) {
            startedpage.style.display = "flex";
        }
      

        // After 2 seconds, hide GetStarted and show homepage
        setTimeout(function() {
            if (startedpage) {
                startedpage.style.display = "none";
            }
           
        }, 500); // 2000 milliseconds = 2 seconds
    };
    