<?php
namespace App\Services;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class MailService {
    private $mail;

    public function __construct() {
        $this->mail = new PHPMailer(true);
        $this->mail->isSMTP();
        $this->mail->Host       = $_ENV['SMTP_HOST'];
        $this->mail->SMTPAuth   = true;
        $this->mail->Username   = $_ENV['SMTP_USER'];
        $this->mail->Password   = $_ENV['SMTP_PASS'];
        $this->mail->SMTPSecure = $_ENV['SMTP_SECURE'];
        $this->mail->Port       = $_ENV['SMTP_PORT'];
        $this->mail->setFrom($_ENV['MAIL_FROM_ADDRESS'], $_ENV['MAIL_FROM_NAME']);
        $this->mail->isHTML(true);
        $this->mail->CharSet = 'UTF-8';
    }

    public function sendLeadNotifications($data) {
        try {
            // 1. Email all'Admin
            $bodyAdmin = $this->renderTemplate('email-admin', $data);
            $this->send($_ENV['MAIL_TO_ADMIN'], "Nuovo Lead Promo Natale: " . $data['nome'], $bodyAdmin);

            // 2. Email al Cliente
            $bodyUser = $this->renderTemplate('email-user', $data);
            $this->send($data['email'], "Conferma Richiesta - Aran Cucine Piacenza", $bodyUser);
            
            return true;
        } catch (Exception $e) {
            // Loggare l'errore se necessario
            return false;
        }
    }

    private function send($to, $subject, $body) {
        $this->mail->clearAddresses();
        $this->mail->addAddress($to);
        $this->mail->Subject = $subject;
        $this->mail->Body = $body;
        $this->mail->send();
    }

    private function renderTemplate($templateName, $data) {
        ob_start();
        extract($data);
        include __DIR__ . "/../../templates/{$templateName}.php";
        return ob_get_clean();
    }
}