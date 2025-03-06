<?php
echo "Hello from database.php";

// if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $searchQ = $_POST["searchQuery"] ?? "";

    $conn = new mysqli("localhost", "root", "password", "");
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    echo "Connected successfully";

    // $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    // $stmt->bind_param("sss", $username, $email, $hashed_password);
    
    // if ($stmt->execute()) {
    //     echo "Success: User registered!";
    // } else {
    //     echo "Error: " . $stmt->error;
    // }

    // $stmt->close();
    // $conn->close();
// }
?>
