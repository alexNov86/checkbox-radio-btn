document.addEventListener("DOMContentLoaded", function (event) {
  const allInputCheckboxes = document.querySelectorAll(
    ".checkbox>[type='checkbox']"
  );
  allInputCheckboxes.forEach((el) => {
    if (el.checked === true) el.parentElement.classList.add("active");
    el.parentElement.addEventListener("click", (event) => {
      if (el.checked === true) {
        el.checked = false;
      } else {
        el.checked = true;
      }
      el.parentElement.classList.toggle("active");
    });
  });
});
