document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response-message').innerText = data.message;
        if (data.status === 'success') {
            form.reset();
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('response-message').innerText = 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.';
    });
});
