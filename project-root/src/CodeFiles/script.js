document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); //verhindert neuladen von Seite

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('response-message').innerText = "Vielen Dank für Ihre Nachricht!";
		
		//print in konsole
		console.log("Name: " + name);
		console.log("E-Mail: " + email);
		console.log("Nachricht: " + message);
		
    } else {
        document.getElementById('response-message').innerText = "Bitte füllen Sie alle Felder aus.";
    }
});
