function login(cb) {
  setTimeout(() => {
    console.log("Logged in successfully");
    cb();
  }, 2500);
}

function getData(cb) {
  setTimeout(() => {
    console.log("Data received");
    cb();
  }, 8500);
}

function calculateData(cb) {
  setTimeout(() => {
    console.log("Data calculated");
    cb();
  }, 3500);
}

function sendSMS(cb) {
  setTimeout(() => {
    console.log("SMS sent");
    cb();
  }, 7500);
}

function logout(cb) {
  setTimeout(() => {
    console.log("Logged out successfully");
    if (cb) cb();
  }, 7500);
}

// async js using callbacks
login(() => {
  getData(() => {
    calculateData(() => {
      sendSMS(() => {
        logout();
      });
    });
  });
});
