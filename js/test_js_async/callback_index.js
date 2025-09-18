const div = document.getElementById("myDiv");

function addMessage(message) {
  const p = document.createElement("p");
  p.textContent = message;
  p.classList.add("step");
  div.appendChild(p);
}

function login(callback) {
  setTimeout(() => {
    console.log("Logged in successfully");
    addMessage("Logged in successfully");
    callback();
  }, 2500);
}

function getData(callback) {
  setTimeout(() => {
    console.log("Data received");
    addMessage("Data received");
    callback();
  }, 8500);
}

function calculateData(callback) {
  setTimeout(() => {
    console.log("Data calculated");
    addMessage("Data calculated");
    callback();
  }, 3500);
}

function sendSMS(callback) {
  setTimeout(() => {
    console.log("SMS sent");
    addMessage("SMS sent");
    callback();
  }, 7500);
}

function logout(callback) {
  setTimeout(() => {
    console.log("Logged out successfully");
    addMessage("Logged out successfully");
    callback();
  }, 7500);
}

// Run sequentially with callbacks
login(() => {
  getData(() => {
    calculateData(() => {
      sendSMS(() => {
        logout(() => {
          addMessage("Process completed!");
          console.log("Process completed!");
        });
      });
    });
  });
});
