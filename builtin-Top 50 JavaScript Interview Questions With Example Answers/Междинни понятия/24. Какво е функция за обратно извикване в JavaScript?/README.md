Функцията callbackе функция, предавана като аргумент на друга функция, която след това се извиква във външната функция. Позволява асинхронно или управлявано от събития програмиране.

function fetchData(callback) {
  // Simulating an asynchronous operation
  setTimeout(function() {
    const data = "Some data";
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log("Data received: " + data);
}

fetchData(processData); // Output after 2 seconds: Data received: Some data
