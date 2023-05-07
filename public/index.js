// Index JS
// alert("Hello World!");
// SendMail Function
function sendMail() {
    console.log("Hello World!");
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };


// IDs
const serviceID = "service_mq97z9o";
const templateID = "template_3zsnggm";

// email JS send function
emailjs.send(serviceID, templateID, params)
.then(
    (res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully");
    })
    .catch((err) => console.log(err));
}