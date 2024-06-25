Делегирането на събития е техника, при която прикачвате един слушател на събития към родителски елемент и този слушател на събития обработва събития, възникващи на неговите дъщерни елементи. Помага за оптимизиране на производителността и намаляване на потреблението на памет.

// HTML:
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

// JavaScript:
document.getElementById("list").addEventListener("click", function(event) {
  if (event.target.nodeName === "LI") {
    console.log(event.target.text.textContent);
  }
});
