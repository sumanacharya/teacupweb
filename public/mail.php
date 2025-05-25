<?php
$to = "contact@teacupdigital.com.au";

// Get POST data and sanitize
$name = strip_tags(trim($_POST["name"] ?? ''));
$email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
$message = trim($_POST["message"] ?? '');

if ($name && $email && $message && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $subject = "New Contact Form Submission from $name";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $from = "contact@teacupdigital.com.au";
    $headers = "From: $from\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo "Message sent!";
    } else {
        http_response_code(500);
        echo "Failed to send message.";
    }
} else {
    http_response_code(400);
    echo "Please fill in all fields correctly.";
}
?> 