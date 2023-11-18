document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code here

    function openTab(tabId) {
        console.log("openTab called with tabId: " + tabId);

        var tabs = document.getElementsByClassName("tab-content");
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = "none";
        }
        document.getElementById(tabId).style.display = "block";
    }

    // You can include other JavaScript code related to your website here
});


