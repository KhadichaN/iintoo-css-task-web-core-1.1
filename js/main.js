const inputFields = document.querySelectorAll(".input-field");

function toggleActiveClass(event) {
  const parent = event.target.closest(".input-set");
  if (event.type === "focus") {
    parent.classList.add("active");
  } else if (event.type === "blur") {
    parent.classList.remove("active");
  }
}

inputFields.forEach(function (input) {
  input.addEventListener("focus", toggleActiveClass);
  input.addEventListener("blur", toggleActiveClass);
});

document.querySelectorAll('input[name="investor-type"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    document.querySelectorAll(".investor-description div").forEach((div) => {
      div.classList.remove("active");
    });
    const descriptionId = this.value;
    document.getElementById(descriptionId).classList.add("active");
  });
});
