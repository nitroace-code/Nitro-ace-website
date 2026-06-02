<?php
// Allow requests from your domain
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

// Folder where files will be stored in cPanel
$uploadDir = 'uploads/';
if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0755, true); 
}

$fileUrl = ""; // Will remain empty if no file is uploaded

// 1. Handle the file upload
if (isset($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
    // Clean the filename and add a timestamp so files don't overwrite each other
    $fileName = time() . '_' . preg_replace('/[^A-Za-z0-9.\-]/', '', basename($_FILES['resume']['name']));
    $targetFilePath = $uploadDir . $fileName;

    if (move_uploaded_file($_FILES['resume']['tmp_name'], $targetFilePath)) {
        // Create the full URL to the file
        $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http";
        $domain = $_SERVER['HTTP_HOST'];
        $dir = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
        $fileUrl = $protocol . "://" . $domain . $dir . "/" . $targetFilePath;
    }
}

// 2. Gather all the text data from the React form
// Note: We use 'documents' to map to your original Google Sheet setup
$data = [
    'name'      => $_POST['name'] ?? '',
    'email'     => $_POST['email'] ?? '',
    'mobile'    => $_POST['mobile'] ?? '',
    'major'     => $_POST['major'] ?? '',
    'year'      => $_POST['year'] ?? '',
    'cars'      => $_POST['cars'] ?? '',
    'message'   => $_POST['message'] ?? '',
    'date'      => $_POST['date'] ?? '',
    'documents' => $fileUrl 
];

// Merge with any extra URL parameters that might have been passed from React
$finalData = array_merge($_POST, $data);

// 3. Send the data to Google Apps Script via GET request
$gasUrl = 'https://script.google.com/macros/s/AKfycbxx9ZxDzA7miwwvqhTLhj6OqBRKidpUlDFMxsdGJCuS0QJo20TYQsYa68aoqFr4wIlQcQ/exec';

// Convert the array into a URL query string (e.g., name=John&email=test...)
$queryString = http_build_query($finalData);

// Perform the GET request to your Google Apps Script
$result = file_get_contents($gasUrl . '?' . $queryString);

if ($result === FALSE) {
    echo json_encode(["status" => "error", "message" => "Failed to save to Google Sheets."]);
} else {
    echo json_encode(["status" => "success", "message" => "Application submitted successfully"]);
}
?>