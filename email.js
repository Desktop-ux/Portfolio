  (function(){
    emailjs.init("5qsMt63t6O59w67yX"); 
  })();


document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();
    
        emailjs.sendForm("service_9jh248c", "template_ff7vyu9", this)
      .then(function(response) {
        alert("✅ Message Sent Successfully!");
        console.log("SUCCESS!", response.status, response.text);
      }, function(error) {
        alert("❌ Failed to send message, please try again.");
        console.log("FAILED...", error);
      });

})