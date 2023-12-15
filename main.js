

document.addEventListener("DOMContentLoaded", function() {


    function openTab(tabId) {
        console.log("openTab called with tabId: " + tabId);

        var tabs = document.getElementsByClassName("tab-content");
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = "none";
        }
        document.getElementById(tabId).style.display = "block";
    }

    
});

document.getElementById("revealButton").addEventListener("click", function() {
   
    var popup = document.getElementById("popup");

    // Toggle the visibility of the popup
    if (popup.style.display === "none" || popup.style.display === "") {
        popup.style.display = "block";

        // Play the sound effect
        var sound = document.getElementById("sound");
        sound.currentTime = 0; // Rewind the audio to the beginning
        sound.play();
    } else {
        popup.style.display = "none";
    }
});


$(document).ready(function() {
   
    $("h1").css("color", "gold"); 
});






