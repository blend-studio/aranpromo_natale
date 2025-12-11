<?php
namespace App\Config; // <--- QUESTA RIGA È CRITICA

use PDO;
use PDOException;

class Database {
    public $conn;

    public function getConnection() {
        $this->conn = null;
        try {
            // Assicurati che $_ENV siano caricate nel index.php o qui
            $dsn = "mysql:host=" . $_ENV['DB_HOST'] . ";dbname=" . $_ENV['DB_NAME'];
            $this->conn = new PDO($dsn, $_ENV['DB_USER'], $_ENV['DB_PASS']);
            $this->conn->exec("set names utf8");
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }
        return $this->conn;
    }
}
?>