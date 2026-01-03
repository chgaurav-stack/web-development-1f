function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

function submitForm() {
    document.getElementById("success-msg").innerText =
        "Message sent successfully!";
    return false; // prevents page reload
}
