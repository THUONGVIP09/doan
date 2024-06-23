<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "travel_info";

// Tạo kết nối
$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user = $_POST['username'];
$email = $_POST['email'];
$pass = password_hash($_POST['password'], PASSWORD_BCRYPT);

$sql = "INSERT INTO users (username, email, password) VALUES ('$user', '$email', '$pass')";

if ($conn->query($sql) === TRUE) {
    echo "Đăng ký thành công";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
