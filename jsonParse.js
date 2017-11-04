/*document.onload = function() {
  console.log(document.getElementById('projects'));
  console.log('loaded');
}

*/
window.onload = function() {
  console.log(JSON.parse(document.querySelector('#projects > div')));
}
