"use strict";

// Loop over them and prevent submission

function getDbInfo() {
    const forms = document.querySelectorAll(".needs-validation");

    let isChecked = false;
    Array.from(forms).forEach((form) => {
        console.log(form.checkValidity());
        if (!form.checkValidity()) {
            form.classList.add("was-validated");
            isChecked = true;
        }
    });
    if (!isChecked) window.getDbInfoApi.get();
}
