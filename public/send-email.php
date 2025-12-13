<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get form data
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$company = isset($_POST['company']) ? trim($_POST['company']) : '';
$subject = isset($_POST['subject']) ? trim($_POST['subject']) : 'Contact Form Submission';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';
$bestTime = isset($_POST['bestTime']) ? trim($_POST['bestTime']) : 'Anytime';

// Validate required fields
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields']);
    exit();
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please provide a valid email address']);
    exit();
}

// Recipient emails
$recipients = [
    'mike@rmrgroup.co.uk',
    'nickb@rmrfacades.com'
];

// Email subject
$emailSubject = $subject !== '' ? $subject : 'New Contact Form Submission - RMR Developments';

// Email body
$emailBody = "New contact form submission from RMR Developments website\n\n";
$emailBody .= "Name: $name\n";
$emailBody .= "Email: $email\n";
$emailBody .= "Phone: " . ($phone !== '' ? $phone : 'Not provided') . "\n";
$emailBody .= "Company: " . ($company !== '' ? $company : 'Not provided') . "\n";
$emailBody .= "Subject: $subject\n";
$emailBody .= "Best time to call: $bestTime\n\n";
$emailBody .= "Message:\n$message\n\n";
$emailBody .= "---\n";
$emailBody .= "Submitted: " . date('Y-m-d H:i:s') . "\n";
$emailBody .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";

// Email headers
$headers = "From: noreply@rmrdevelopments.uk\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email to all recipients
$success = true;
foreach ($recipients as $recipient) {
    if (!mail($recipient, $emailSubject, $emailBody, $headers)) {
        $success = false;
    }
}

if ($success) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for contacting us! We\'ll be in touch within 24 hours.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Sorry, there was an error sending your message. Please try again or email us directly at info@rmrdevelopments.uk'
    ]);
}
?>
