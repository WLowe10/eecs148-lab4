const form = document.getElementById("password_form")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const firstPassword = formData.get("first_password") ?? "";
    const secondPassword = formData.get("second_password") ?? "";

    if (firstPassword.length < 8) {
        alert("The length of the first password is less than 8 letters!")
    } else if (secondPassword.length < 8) {
        alert("The length of the second password is less than 8 letters!")
    } else if (firstPassword != secondPassword) {
        alert("Two passwords don't match!")
    } else {
        alert("Everything is OK!")
    }
})