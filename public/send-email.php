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
$name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$phone = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : '';
$company = isset($_POST['company']) ? strip_tags(trim($_POST['company'])) : '';
$subject = isset($_POST['subject']) ? strip_tags(trim($_POST['subject'])) : 'Contact Form Submission';
$message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';
$bestTime = isset($_POST['bestTime']) ? strip_tags(trim($_POST['bestTime'])) : 'Anytime';

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

// Email configuration - send to LOCAL email that forwards to distribution list
$to = 'info@rmrdevelopments.uk';
$emailSubject = $subject !== '' ? $subject : 'New Contact Form Submission - RMR Developments';

// Build plain text email content (like the working site)
$emailBody = "New contact form submission from RMR Developments website.\n\n";
$emailBody .= "Contact Details:\n";
$emailBody .= "================\n";
$emailBody .= "Name: $name\n";
$emailBody .= "Email: $email\n";
if (!empty($phone)) {
    $emailBody .= "Phone: $phone\n";
}
if (!empty($company)) {
    $emailBody .= "Company: $company\n";
}
$emailBody .= "\nEnquiry Details:\n";
$emailBody .= "================\n";
$emailBody .= "Subject: $subject\n";
$emailBody .= "Best time to call: $bestTime\n";
$emailBody .= "\nMessage:\n";
$emailBody .= "--------\n";
$emailBody .= "$message\n";
$emailBody .= "\n--\n";
$emailBody .= "Sent from: RMR Developments Contact Form\n";
$emailBody .= "Date: " . date('d/m/Y H:i:s') . "\n";
$emailBody .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";

// Email headers (simple, like the working site)
$headers = "From: noreply@rmrdevelopments.uk\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email using simple mail() function
if (mail($to, $emailSubject, $emailBody, $headers)) {
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
