const newsletterForm = document.getElementById("newsletterForm");
const inputEmail = document.getElementById("inputEmail");
const inputEmailError = document.getElementById("input-email-error");
const successEmailLink = document.getElementById("successEmail");
const successTitle = document.getElementById("successTitle");
const buttonReset = document.getElementById("buttonClear");


// The error text and aria-describedby only exist while the email is invalid,
// so screen readers don't announce an error that isn't there
function showEmailError() {
    inputEmail.parentElement.classList.add("is-error");
    inputEmail.setAttribute("aria-invalid", "true");
    inputEmail.setAttribute("aria-describedby", "input-email-error");
    inputEmailError.textContent = "Valid email required";
}

function clearEmailError() {
    inputEmail.parentElement.classList.remove("is-error");
    inputEmail.setAttribute("aria-invalid", "false");
    inputEmail.removeAttribute("aria-describedby");
    inputEmailError.textContent = "";
}


newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = inputEmail.value;
    const isValid = emailRegex.test(email.trim());

    if (isValid) {
        clearEmailError();

        document.querySelector('[data-state="form"]').hidden = true;
        document.querySelector('[data-state="success"]').hidden = false;

        successEmailLink.href = `mailto:${email}`;
        successEmailLink.lastChild.textContent = email;

        // Move focus to the success heading so keyboard and screen reader users land on the confirmation
        successTitle.focus();

    } else {
        showEmailError();
    }
});



buttonReset.addEventListener("click", function () {
    document.querySelector('[data-state="form"]').hidden = false;
    document.querySelector('[data-state="success"]').hidden = true;
    clearEmailError();
    inputEmail.value = "";

    // Return focus to the email field so the user can continue from where they left off
    inputEmail.focus();
});
