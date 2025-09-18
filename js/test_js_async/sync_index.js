function login() {
  setTimeout(() => {
    console.log("Logged in successfully");
  }, 2500);
}

function getData() {
  setTimeout(() => {
    console.log("Data received");
  }, 8500);
}

function calculateData() {
  setTimeout(() => {
    console.log("Data calculated");
  }, 3500);
}

function sendSMS() {
  setTimeout(() => {
    console.log("SMS sent");
  }, 7500);
}

function logout() {
  setTimeout(() => {
    console.log("Logged out successfully");
  }, 7500);
}

login();
getData();
calculateData();
sendSMS();
logout();
