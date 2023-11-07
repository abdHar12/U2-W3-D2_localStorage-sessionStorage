window.addEventListener("DOMContentLoaded", () => {
  const addStorageButton = document.querySelector("button[type='submit']");
  const removeStorageButton = document.getElementById("remove-the-value");
  const input = document.getElementsByTagName("input")[0];
  if (localStorage.getItem("nameToRegister")) {
    input.value = localStorage.getItem("nameToRegister");
  }
  addStorageButton.onclick = () => {
    if (input.value) {
      localStorage.setItem("nameToRegister", input.value);
    }
  };
  removeStorageButton.onclick = () => {
    if (localStorage.getItem("nameToRegister")) {
      localStorage.removeItem("nameToRegister");
    }
  };
});
