<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect form data
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $event = $_POST['event'] ?? '';
    $amount = $_POST['amount'] ?? '';
    $paymentMethod = $_POST['paymentMethod'] ?? '';
    $upiId = $_POST['upiId'] ?? '';

    // Create associative array
    $paymentData = [
        "name" => $name,
        "email" => $email,
        "event" => $event,
        "amount" => $amount,
        "paymentMethod" => $paymentMethod,
        "upiId" => $upiId
    ];

    // File to store payments
    $file = 'payments.json';

    // Read existing data
    if (file_exists($file)) {
        $existingData = json_decode(file_get_contents($file), true);
        if (!is_array($existingData)) {
            $existingData = [];
        }
    } else {
        $existingData = [];
    }

    // Add new payment
    $existingData[] = $paymentData;

    // Save updated data
    if (file_put_contents($file, json_encode($existingData, JSON_PRETTY_PRINT))) {
        // Redirect to confirmation page after saving
        header("Location: confirmation.html");
        exit;
    } else {
        echo "❌ Error saving payment!";
    }
} else {
    echo "Invalid request method.";
}
?>
