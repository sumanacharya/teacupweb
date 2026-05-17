<?php
$to = "contact@teacupdigital.com.au";

$name    = strip_tags(trim($_POST['name']    ?? ''));
$org     = strip_tags(trim($_POST['org']     ?? ''));
$email   = filter_var(trim($_POST['email']   ?? ''), FILTER_SANITIZE_EMAIL);
$phone   = strip_tags(trim($_POST['phone']   ?? ''));
$message = strip_tags(trim($_POST['message'] ?? ''));

if (!$name || !$email || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Please complete all required fields.";
    exit;
}

$subject  = "Enquiry from {$name}" . ($org ? " ({$org})" : '');

$body  = "Name:         {$name}\n";
$body .= $org   ? "Organisation: {$org}\n"   : '';
$body .= "Email:        {$email}\n";
$body .= $phone ? "Phone:        {$phone}\n" : '';
$body .= "\n--- Message ---\n{$message}\n";

$from    = "contact@teacupdigital.com.au";
$headers = "From: {$from}\r\nReply-To: {$email}\r\nContent-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo "Message sent.";
} else {
    http_response_code(500);
    echo "Unable to send. Please email us directly at contact@teacupdigital.com.au";
}
?>
