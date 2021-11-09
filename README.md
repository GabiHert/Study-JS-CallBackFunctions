# Study-JS-CallBackFunctions

- CallBack functions.
- Introduction to Promises.
- A function can only be executed after another function finishes its interactions.

# CallBack functions.

```javascript
function fx(callbackFunction) {
  setTimeout(() => {
    console.log("fx");
    if (callbackFunction) callbackFunction();
  }, rand());
}
```

- `callbackFunction`( ) is set as `fx` parameter.
- if `callbackFunction` exists, `callbackFunction` is executed.

```javascript
f1(() => {
  f2(() => {
    f3(() => {
      console.log("The end");
    });
  });
});
```

- `f1` receives `f2` as argument which receives `f3` as argument.
- `f1` is executed and after timeout if callBack exists it will be executed.
- `f2` will only be executed after `f1` finishes its interactions and `f3` will only be executed after `f2` finishes its interactions.

# Using separated callBack functions.

```javascript
function f1(callbackFunction) {
  setTimeout(() => {
    console.log("f1");
    if (callbackFunction) callbackFunction();
  }, rand());
}
function f1(callbackFunction) {
  setTimeout(() => {
    console.log("f1");
    if (callbackFunction) callbackFunction();
  }, rand());
}
function f1(callbackFunction) {
  setTimeout(() => {
    console.log("f1");
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
```

- `f1` is called with `f1CallbackFunction` as argument.
- After `f1` interactions `f1CallbackFunction` is executed calling `f2` with `f2CallbackFunction` as argument.
- After `f2` interactions `f3CallbackFunction` is called, executing `console.log("The end")` .
