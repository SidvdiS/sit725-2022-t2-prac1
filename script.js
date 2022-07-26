const button = document.querySelector("#button");
const template = document.querySelector(".done-template");

function showTemplate() {
  if (button.innerText === "HIDE") button.innerText = "SHOW";
  else button.innerText = "HIDE";

  if (template.classList.contains("close-template"))
    template.classList.remove("close-template");
  else template.classList.add("close-template");
}
