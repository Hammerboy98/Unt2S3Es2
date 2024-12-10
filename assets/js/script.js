const form = document.querySelector("form");
const usernameInsert = document.querySelector("#usernameInsert");
const btnCancella = document.querySelector("#btnCancella");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInsert.value;

  localStorage.setItem("user", username);

  saveUser.innerHTML = `Sei loggato come ${username}`;

  form.reset();
});

btnCancella.addEventListener("click", () => {
  localStorage.removeItem("user");
  saveUser.innerHTML = "";
  form.reset();
});

const savedUser = localStorage.getItem("user");

const saveUser = document.querySelector("#saveUser");

window.addEventListener("DOMContentLoaded", () => {
  startCounter();
  if (savedUser) {
    saveUser.innerHTML = `Sei loggato come ${savedUser}`;
  }
});

const counter = document.getElementById("counter");

const startCounter = () => {
  let count=sessionStorage.getItem("count");

  const updateCounter = () => {
    count++;

    sessionStorage.setItem("count", count);

    counter.textContent = formatTime(count);

    setTimeout(updateCounter, 1000);
  };

  updateCounter();
  
};

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours}:${minutes}:${secs}`;
};

startCounter();
