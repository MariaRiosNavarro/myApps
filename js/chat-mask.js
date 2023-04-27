// ------- A------appearance of the saved name in the form

// ------ User-----

const chatNamePhoneInput = document.querySelector(
  '[data-js="chatname-phone-input"]'
);

const chatNamePhoneValue = document.querySelector(
  '[data-js="chatname-phone-value"]'
);

chatNamePhoneInput.addEventListener("input", () => {
  chatNamePhoneValue.textContent = chatNamePhoneInput.value;
});

//  ----Chat Name-------

const chatNameOutInput = document.querySelector(
  '[data-js="chatname-out-input"]'
);
const chatNameOutValue = document.querySelector(
  '[data-js="chatname-out-value"]'
);

chatNameOutInput.addEventListener("input", () => {
  chatNameOutValue.textContent = chatNameOutInput.value;
});

//-------Save/Delete------------

const saveButton = document.querySelector('[data-js="save-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

// Save the values of the input fields by clicking on the save button
saveButton.addEventListener("click", () => {
  const formValues = {
    chatNameOut: chatNameOutInput.value,
  };
  localStorage.setItem("formValues", JSON.stringify(formValues));
  alert("Formular gespeichert");
});

// Delete saved values and reload the page by clicking on the delete button
clearButton.addEventListener("click", () => {
  localStorage.removeItem("formValues");
  location.reload();
});

// Get saved values on page load
const savedValues = JSON.parse(localStorage.getItem("formValues")) || {};
chatNameOutInput.value = savedValues.chatNameOut || "";

// Update the value of the span by entering the value
chatNameOutInput.addEventListener("input", () => {
  chatNameOutValue.textContent = chatNameOutInput.value;
});

// ----- end A
