<?php
$servername = "127.0.0.1";  
$username = "zbronola1";         
$password = "zbronola1";        
$database = "";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Step 2: Write the query to select all data from a table
$sql = "SELECT * FROM yourTableName"; // Replace 'yourTableName' with your actual table name

// Step 3: Execute the query
$result = $conn->query($sql);

// Step 4: Check if there are results
if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Creator: " . $row["creator"]. "<br>";
    }
} else {
    echo "0 results";
}

// Step 5: Close the connection
$conn->close();
?>
