document.addEventListener("DOMContentLoaded", function (event) {
  // ------------------ Functions ------------------
  const toggleCheckbox = (inputCheck) => {
    if (inputCheck.checked) {
      inputCheck.parentElement.classList.add("active");
    }
    inputCheck.parentElement.addEventListener("click", (event) => {
      if (inputCheck.checked) {
        inputCheck.checked = false;
      } else {
        inputCheck.checked = true;
      }
      inputCheck.parentElement.classList.toggle("active");
    });
  };

  const toggleRadio = (inputRadio) => {
    if (inputRadio.checked) inputRadio.parentElement.classList.add("active");
    inputRadio.parentElement.addEventListener("click", (event) => {
      if (inputRadio.checked) {
        for (let input of event.target.parentElement.children) {
          input.classList.remove("active");
          input.children[0].checked = false;
        }
      } else {
        for (let input of event.target.parentElement.children) {
          input.classList.remove("active");
          input.children[0].checked = false;
        }
        event.target.classList.add("active");
        inputRadio.checked = true;
      }
    });
  };

  // ------------------ End Functions ------------------

  // ------------------ Checkboxes ------------------
  const allInputCheckboxes = document.querySelectorAll(
    ".checkbox>[type='checkbox']"
  );
  allInputCheckboxes.forEach((el) => toggleCheckbox(el));
  // ------------------ End Checkboxes ------------------

  // ------------------ Radio_buttons ------------------
  const allInputRadio = document.querySelectorAll(
    ".radio-battons__item>[type='radio']"
  );
  allInputRadio.forEach((el) => toggleRadio(el));
  // ------------------End Radio_buttons ------------------
});
