document.querySelector("#add-time")
  .addEventListener("click", cloneField)
function cloneField() {
  const nemFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
  const fields = nemFieldContainer.querySelectorAll("input")
  fields.forEach(function (field) {
    field.value = ""
  })
  document.querySelector("#schedule-items").appendChild(nemFieldContainer)
}
