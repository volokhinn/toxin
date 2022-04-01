function expCheckbox() {
    const checkboxHead = document.querySelector(".expandable__head");
    const checkboxIcon = document.querySelector(".expandable__head-icon");
    const checkboxList = document.querySelector(".expandable-checkbox");
    if (checkboxHead) {
        checkboxHead.addEventListener("click", () => {
          checkboxList.classList.toggle("expandable-checkbox");
          checkboxIcon.classList.toggle(".expandable__head-icon--disabled");
        });
      }
}
export { expCheckbox };