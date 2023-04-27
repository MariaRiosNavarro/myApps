// ------- A------appearance of the saved name in the form

const chatNameOutInput = document.querySelector(
  '[data-js="chatname-out-input"]'
);
const chatNameOutValue = document.querySelector(
  '[data-js="chatname-out-value"]'
);

chatNameOutInput.addEventListener("input", () => {
  chatNameOutValue.textContent = chatNameOutInput.value;
});

// ----- end A
