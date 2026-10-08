const newsletterForm = document.getElementById("newsletterForm");
const inputEmail = document.getElementById("inputEmail");
const successEmailLink = document.getElementById("successEmail");
const buttonReset = document.getElementById("buttonClear");


newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = inputEmail.value;


    if (emailRegex.test(email.trim())) {
        document.querySelector('[data-state="form"]').hidden = true;
        document.querySelector('[data-state="success"]').hidden = false;

        successEmailLink.href = `mailto:${email}`;
        successEmailLink.innerHTML = `<strong>${email}</strong>`;

    } else {
        inputEmail.parentElement.classList.add("is-error");
    }
});



buttonReset.addEventListener("click", function () {
    document.querySelector('[data-state="form"]').hidden = false;
    document.querySelector('[data-state="success"]').hidden = true;
    inputEmail.parentElement.classList.remove("is-error");
    inputEmail.value = "";
});
