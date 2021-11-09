function rand(min = 1000, max = 3000) {
  const n = Math.random() * (max - min) + min;
  return Math.floor(n);
}

function f1(callbackFunction) {
  setTimeout(() => {
    console.log("f1");
    if (callbackFunction) callbackFunction();
  }, rand());
}

function f2(callbackFunction) {
  setTimeout(() => {
    console.log("f2");
    if (callbackFunction) callbackFunction();
  }, rand());
}

function f3(callbackFunction) {
  setTimeout(() => {
    console.log("f3");
    if (callbackFunction) callbackFunction();
  }, rand());
}

function f1CallbackFunction() {
  f2(f2CallbackFunction);
}
function f2CallbackFunction() {
  f3(f3CallbackFunction);
}
function f3CallbackFunction() {
  console.log("The end");
}

f1(f1CallbackFunction);
