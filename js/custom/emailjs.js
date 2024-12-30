(function() {
    emailjs.init("HqcCmVYY7mnKUPgWS");
})();

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var userEmail = document.getElementById("userEmail").value;

        var templateParams = {
            user_email: userEmail
        };

        emailjs.send("service_b8i9m6j", "template_xaf9lfd", templateParams)
            .then(function(response) {
                alert("Email sent successfully!");
            }, function(error) {
                alert("There was an error sending the email. Please contact us via email.");
            });
    });
});
