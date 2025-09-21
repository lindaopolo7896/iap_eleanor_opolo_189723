<?php
require 'connect.php';

$result = $conn->query("SELECT name, email, role FROM users ORDER BY name ASC");

if ($result->num_rows > 0) {
    echo "<ol>"; // numbered list
    while($row = $result->fetch_assoc()) {
        echo "<li>";
        echo "Name: " . htmlspecialchars($row['name']) . ", ";
        echo "Email: " . htmlspecialchars($row['email']) . ", ";
        echo "Role: " . htmlspecialchars($row['role']);
        echo "</li>";
    }
    echo "</ol>";
} else {
    echo "No users found.";
}

$conn->close();
?>
