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

f1(() => {
  f2(() => {
    f3(() => {
      console.log("The end");
    });
  });
});
