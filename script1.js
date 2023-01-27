function get(url) {
  // capital P
  // anonymous function with two parameters: resolve and reject
  // Promisses are essentially Callbacks Under the Hood,
  //    but they let us write the syntax in a way that's easeier to work with.
  return new Promise(function (resolve, reject) {
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url);
    httpRequest.onload = function () {
      if (httpRequest.status === 200) {
        // Resolve the promise with the response text
        resolve(httpRequest.response);
      } else {
        // Reject the promise with the status text
        reject(Error(httpRequest.statusText));
      }
    };

    // Handle network errors
    httpRequest.onerror = function () {
      reject(Error("Network Error"));
    };

    httpRequest.send();
  });
}

function tempToC(kelvin) {
  return (kelvin - 273.15).toFixed(0);
}

document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "7ea8e959cebbba86bef1edd5c42ee827";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=tehran&APPID=" + apiKey;
  console.log(get(url));
});

// run and see the promise object in console
// state and result...
