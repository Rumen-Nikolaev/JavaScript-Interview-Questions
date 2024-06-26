Делегирането на събития е техника, при която прикачвате един слушател на събития към родителски елемент, за да обработвате събития, възникващи в неговите дъщерни елементи. Полезно е за динамично създадени елементи или когато имате голям брой елементи.

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
