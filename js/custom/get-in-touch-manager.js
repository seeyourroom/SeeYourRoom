document.addEventListener("DOMContentLoaded", function() {
  fetch('http://213.130.25.136:8080/api/status')
    .then(response => response.json())
    .then(data => {
      if (data.available === true) {
        const script = document.createElement("script");
        script.src = "js/custom/get-in-touch.js";
          console.log("get-in-touch.js started");
          document.body.appendChild(script);
      } else {
        const comment = document.createComment('<script src="js/custom/emailjs.js"></script>');
        document.body.appendChild(comment);
      }
    })
    .catch(error => {
      console.error('Error fetching CRM status:', error);
      const comment = document.createComment('<script src="js/custom/emailjs.js"></script>');
      document.body.appendChild(comment);
    });
});
