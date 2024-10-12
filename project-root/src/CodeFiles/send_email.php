<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "trovefehl@gmx.de"; // admin email that gets contanct formular info 
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Vielen Dank für Ihre Nachricht!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Es gab ein Problem beim Senden der Nachricht. Bitte versuchen Sie es später erneut."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Ungültige Anfrage"]);
}
?>