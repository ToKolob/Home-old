// js/script.js
function scrollToSection(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  }
}
