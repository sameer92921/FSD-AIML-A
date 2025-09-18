function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Logged in successfully");
    }, 2500);
    resolve();
  });
}

function getData() {
  return new Promise(() => {
    setTimeout(() => {
      console.log("Fetched data");
    }, 8500);
    resolve();
  });
}
function calculateData() {
  return new Promise(() => {
    setTimeout(() => {
      console.log("Data calculated successfully");
    }, 8500);
    resolve();
  });
}
function sendSMS() {
  return new Promise(() => {
    setTimeout(() => {
      console.log("SMS sent");
    }, 8500);
    resolve();
  });
}
function logout() {
  return new Promise(() => {
    setTimeout(() => {
      console.log("Logged out");
    }, 8500);
    resolve();
  });
}

register().then(getData).then(calculateData).then(sendSMS).then(logout);
