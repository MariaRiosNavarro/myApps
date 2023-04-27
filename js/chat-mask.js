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

// ----- end A
