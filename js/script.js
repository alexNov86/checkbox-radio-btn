document.addEventListener("DOMContentLoaded", function (event) {
  // console.log(event);
  const allCheckboxes = document.querySelectorAll(".checkbox");
  console.log(allCheckboxes);
  for (const checkbox of allCheckboxes) {
    console.log(checkbox.getAttribute(checked));
  }
  // allCheckboxes.forEach((el) => {
  //   console.log(el.checked);
  // });
});
