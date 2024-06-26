Можете да използвате preventDefault()метода на обекта на събитието в манипулатора на събитие, за да предотвратите поведението по подразбиране, свързано с това събитие.


<a href="#" id="myLink">Click me!</a>

document.getElementById("myLink").addEventListener("click",
function(event) {
  event.preventDefault();
  console.log("Link clicked, but default behavior
prevented");
});
