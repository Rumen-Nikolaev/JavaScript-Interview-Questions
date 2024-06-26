localStorageИ двата sessionStorageса обекти за уеб съхранение в JavaScript, но имат различни обхвати и живот.

localStorage запазва данните дори след като прозорецът на браузъра е затворен и е достъпен в различни раздели/прозорци на браузъра от един и същ произход.
sessionStorage съхранява данни за една сесия на браузъра и е достъпен само в рамките на същия раздел или прозорец.


localStorage.setItem("name", "John");
console.log(localStorage.getItem("name")); // Output: John

sessionStorage.setItem("name", "John");
console.log(sessionStorage.getItem("name")); // Output John
