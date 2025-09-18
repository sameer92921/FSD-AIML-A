const div = document.getElementById("myDiv");
const h3 = document.createElement("h3");
    h3.textContent = "This is an H3 added with JS";

    div.appendChild(h3);
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

async function main() {
  try {
    await login();
    await getData();
    await calculateData();
    await sendSMS();
    await logout();
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

main();
