function sendMail(event){
    event.preventDefault(); // 🛑 Prevent form reload

    var params = {
        name: document.getElementById('contactme').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    const serviceID = "service_90z8nt9";
    const templateID = "template_wwgl0yl";

    emailjs.send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById('contactme').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";

        console.log(res);
        // Instead of alert, use your popup!
        showPopup("Success!", "Your message was sent successfully.");
    })
    .catch((err) => {
        console.log(err);
        showPopup("Error", "Something went wrong. Please try again.");
    });
}

function showPopup(title, message) {
  document.getElementById('popup-title').innerText = title;
  document.getElementById('popup-message').innerText = message;
  document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}




