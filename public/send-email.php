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

// SMTP Configuration - UPDATE THE PASSWORD!
$smtp_host = 'localhost';
$smtp_port = 465;
$smtp_username = 'noreply@rmrdevelopments.uk';
$smtp_password = 'YOUR_PASSWORD_HERE'; // UPDATE THIS WITH YOUR ACTUAL PASSWORD
$smtp_from = 'noreply@rmrdevelopments.uk';
$smtp_from_name = 'RMR Developments Website';

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

// Recipient emails - send directly to external addresses
$recipients = [
    'mike@rmrgroup.co.uk',
    'nickb@rmrfacades.com'
];

// Email subject
$emailSubject = $subject !== '' ? $subject : 'New Contact Form Submission - RMR Developments';

// Email body (HTML)
$emailBody = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #bc1019; color: white; padding: 20px; text-align: center; }
        .content { background-color: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #666; }
        .value { color: #333; }
        .footer { text-align: center; padding: 20px; color: #999; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>New Contact Form Submission</h2>
        </div>
        <div class='content'>
            <div class='field'>
                <span class='label'>Name:</span> <span class='value'>$name</span>
            </div>
            <div class='field'>
                <span class='label'>Email:</span> <span class='value'>$email</span>
            </div>
            <div class='field'>
                <span class='label'>Phone:</span> <span class='value'>" . ($phone !== '' ? $phone : 'Not provided') . "</span>
            </div>
            <div class='field'>
                <span class='label'>Company:</span> <span class='value'>" . ($company !== '' ? $company : 'Not provided') . "</span>
            </div>
            <div class='field'>
                <span class='label'>Subject:</span> <span class='value'>$subject</span>
            </div>
            <div class='field'>
                <span class='label'>Best time to call:</span> <span class='value'>$bestTime</span>
            </div>
            <div class='field'>
                <span class='label'>Message:</span><br>
                <div class='value'>" . nl2br(htmlspecialchars($message)) . "</div>
            </div>
        </div>
        <div class='footer'>
            <p>Submitted: " . date('Y-m-d H:i:s') . "</p>
            <p>IP Address: " . $_SERVER['REMOTE_ADDR'] . "</p>
        </div>
    </div>
</body>
</html>
";

// Plain text version
$emailBodyPlain = "New contact form submission from RMR Developments website\n\n";
$emailBodyPlain .= "Name: $name\n";
$emailBodyPlain .= "Email: $email\n";
$emailBodyPlain .= "Phone: " . ($phone !== '' ? $phone : 'Not provided') . "\n";
$emailBodyPlain .= "Company: " . ($company !== '' ? $company : 'Not provided') . "\n";
$emailBodyPlain .= "Subject: $subject\n";
$emailBodyPlain .= "Best time to call: $bestTime\n\n";
$emailBodyPlain .= "Message:\n$message\n\n";
$emailBodyPlain .= "---\n";
$emailBodyPlain .= "Submitted: " . date('Y-m-d H:i:s') . "\n";
$emailBodyPlain .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";

// Send email via SMTP
function sendSMTPEmail($to, $subject, $bodyHTML, $bodyPlain, $fromEmail, $fromName, $replyTo, $smtpConfig) {
    $boundary = md5(uniqid(time()));

    // Headers
    $headers = "From: $fromName <$fromEmail>\r\n";
    $headers .= "Reply-To: $replyTo\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/alternative; boundary=\"$boundary\"\r\n";

    // Message body
    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $body .= $bodyPlain . "\r\n";
    $body .= "--$boundary\r\n";
    $body .= "Content-Type: text/html; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $body .= $bodyHTML . "\r\n";
    $body .= "--$boundary--";

    // Use PHP mail() with SMTP headers
    // cPanel automatically routes through SMTP when properly configured
    $additionalParams = "-f$fromEmail";

    return mail($to, $subject, $body, $headers, $additionalParams);
}

// Send email to all recipients
$success = true;
$failedRecipients = [];

foreach ($recipients as $recipient) {
    $result = sendSMTPEmail(
        $recipient,
        $emailSubject,
        $emailBody,
        $emailBodyPlain,
        $smtp_from,
        $smtp_from_name,
        $email,
        []
    );

    if (!$result) {
        $success = false;
        $failedRecipients[] = $recipient;
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
