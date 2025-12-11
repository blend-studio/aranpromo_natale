<?php
namespace App\Models;

use PDO;
use App\Config\Database;

class Lead {
    private $conn;
    private $table = "leads";

    public $nome;
    public $cognome;
    public $email;
    public $telefono;
    public $messaggio;

    public function __construct() {
        $database = new Database();
        $this->conn = $database->getConnection();
    }

    public function create() {
        $query = "INSERT INTO " . $this->table . " 
                  SET nome=:nome, cognome=:cognome, email=:email, telefono=:telefono, messaggio=:messaggio";

        $stmt = $this->conn->prepare($query);

        // Sanitize base (ulteriore validazione va nel controller)
        $this->nome = htmlspecialchars(strip_tags($this->nome));
        $this->cognome = htmlspecialchars(strip_tags($this->cognome));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->telefono = htmlspecialchars(strip_tags($this->telefono));
        $this->messaggio = htmlspecialchars(strip_tags($this->messaggio));

        $stmt->bindParam(":nome", $this->nome);
        $stmt->bindParam(":cognome", $this->cognome);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":telefono", $this->telefono);
        $stmt->bindParam(":messaggio", $this->messaggio);

        if($stmt->execute()) {
            return true;
        }
        return false;
    }
}