<a href="#" id="myLink">Click me!</a>

document.getElementById("myLink").addEventListener("click",
function(event) {
  event.preventDefault();
  console.log("Link clicked, but default behavior
prevented");
});
