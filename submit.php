<?php
require 'ClassAutoLoad.php';
require 'connect.php';

// Get POST data
$username = $_POST['username'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

// Insert into DB
$stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $email, $password);

if ($stmt->execute()) {

   
    $name = $username;

  
    require 'mailing.php';

    echo "Registration successful! Check your email.";
} else {
    echo "Error: " . $stmt->error;
}
