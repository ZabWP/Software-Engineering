<?php
$servername = "127.0.0.1";  
$username = "zbronola1";         
$password = "zbronola1";        
$database = "zbronola1";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully";
}

$sql = "SELECT * FROM users";
$result = $conn->query($sql);


$data = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}


$conn->close();


echo json_encode($data);
?>