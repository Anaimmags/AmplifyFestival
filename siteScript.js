// MAP 

// Add event listener to check that the html page (document object model (DOM)) has loaded before executing a function 
document.addEventListener("DOMContentLoaded", function() {
  
  // Function to select all elements in the DOM that have the class name ‘popup’, then…
      const popups = document.querySelectorAll(".popup");
    
  // Add a ‘click’ event listener to the DOM <body> before executing a nested function…
      document.body.addEventListener("click", function(event) {
      
    // Nested function to select and hide all ‘popuptext’ elements which are children of the ‘popup’ elements by removing the "show" class defined in CSS as visible, reverting it back to its original ‘hidden’ state
        popups.forEach(function(popup) {
          popup.querySelector(".popuptext").classList.remove("show");
        });
    
  // Loops through each popup
      popups.forEach(function(popup) {
      
    // Checks if the clicked element (event.target) is in the ‘popup’ or ‘popuptext’. If it is not (i.e. statement is true) it executes a function to remove "show" class defined in CSS as visible, reverting it back to its original ‘hidden’ state
        if (!popup.contains(event.target)) {
          popup.querySelector(".popuptext").classList.remove("show");
          }
        });
      });
    
    // Add a click event listener to all popups
      popups.forEach(function(popup) {
        popup.addEventListener("click", function(event) {
          event.stopPropagation(); // Prevent the click event from reaching the DOM body and potentially triggering any event handlers attached to parent elements
    
        // Close popuptext if another popup is clicked by removing the "show" class in CSS
          popups.forEach(function(otherPopup) {
            otherPopup.querySelector(".popuptext").classList.remove("show");
          });
        // Add / toggle the "show" class if it's not present on the element, and remove it if it's already present
          popup.querySelector(".popuptext").classList.toggle("show");
        });
      });
    });    

// HOME PAGE COUNTDOWN //

var countDownDate = new Date ("Aug 2 2024 00:00:00").getTime();
var x = setInterval(function(){
var now = new Date().getTime();
var distance = countDownDate - now;
      
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
      
if(distance <0) {
  clearInterval (x);
document.getElementById("days").innerHTML = "00";
document.getElementById("hours").innerHTML = "00";
document.getElementById("minutes").innerHTML = "00";
document.getElementById("seconds").innerHTML = "00";
}
},1000)