<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

document.getElementById("myList").addEventListener("click", 
function(event) {
  if (event.target.nodeName === "LI") {
    console.log(event.target.textContent);
  }
});
