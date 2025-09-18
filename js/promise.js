function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register end");
    }, 4000);
    resolve();
  });
}
function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("sendEmail end");
    }, 4000);
    resolve();
  });
}
function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login end");
    }, 4000);
    resolve();
  });
}
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("get data end");
    }, 4000);
    reject('Get data error');
  });
}
function displayData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("display data end");
    }, 4000);
  });
}

register()
  .then(sendEmail)
  .then(login)
  .then(getData)
  .then(displayData)
  .catch((err) => {
    console.log("Error " + err);
  });
console.log("call other application");
