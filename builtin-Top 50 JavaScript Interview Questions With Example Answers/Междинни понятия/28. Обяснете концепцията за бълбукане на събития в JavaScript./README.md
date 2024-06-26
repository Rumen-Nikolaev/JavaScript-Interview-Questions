Барбулиране на събитие е процесът, при който събитие се задейства върху вложен елемент и след това същото събитие се разпространява към неговите родителски елементи в дървото на обектния модел на документа (DOM). Започва от най-вътрешния елемент и стига до корена на документа.

Пример:
<div id="parent">
  <div id="child">Click me!</div>
</div>

Когато щракнете върху дъщерния елемент, както дъщерният, така и родителският манипулатори на събития ще бъдат задействани и изходът ще бъде:

document.getElementById("child").addEventListener("click",
function() {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", 
function() {
  console.log("Parent clicked");
});
