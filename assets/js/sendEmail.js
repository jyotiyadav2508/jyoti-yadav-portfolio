// Create sendMail function and call emailjs.send(service ID, template ID) method 
function sendMail(contactForm) {
    emailjs.send("gmail", "jyoti", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function(response) {
                console.log("SUCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            });
    return false;
}