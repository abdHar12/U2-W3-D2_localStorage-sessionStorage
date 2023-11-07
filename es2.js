window.addEventListener("DOMContentLoaded", () => {
  if (parseInt(sessionStorage.getItem("seconds"))) {
    startCountingseconds(parseInt(sessionStorage.getItem("seconds")));
  } else startCountingseconds(0);
});

const startCountingseconds = (count) => {
  setInterval(function () {
    ++count;
    const span = document.querySelector("h1>span");
    sessionStorage.setItem("seconds", count);
    span.innerHTML = count;
  }, 1000);
};
