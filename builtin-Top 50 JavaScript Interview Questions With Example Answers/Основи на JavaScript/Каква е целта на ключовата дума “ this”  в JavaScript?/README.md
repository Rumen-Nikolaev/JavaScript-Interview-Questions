Ключовата this дума се отнася до обекта, който изпълнява текущата функция или метод. Той позволява достъп до свойства и методи на обекта в контекста на този обект.

const person = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

person.greet(); // Output: Hello, John
