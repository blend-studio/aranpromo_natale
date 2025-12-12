<?php
namespace App\Services;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class MailService {
    private $mail;

    public function __construct() {
        $this->mail = new PHPMailer(true);
        
        try {
            // Configurazione Server SMTP
            $this->mail->isSMTP();
            $this->mail->Host       = $_ENV['SMTP_HOST'];
            $this->mail->SMTPAuth   = true;
            $this->mail->Username   = $_ENV['SMTP_USER'];
            $this->mail->Password   = $_ENV['SMTP_PASS'];
            $this->mail->SMTPSecure = $_ENV['SMTP_SECURE'];
            $this->mail->Port       = $_ENV['SMTP_PORT'];
            
            // Impostazioni Charset e Encoding
            $this->mail->CharSet = 'UTF-8';
            $this->mail->Encoding = 'base64';

            // MITTENTE: Usa quello autenticato (info@blendstudio.it) ma col nome del cliente
            $this->mail->setFrom($_ENV['MAIL_FROM'], $_ENV['SITE_NAME']);
            
            // REPLY-TO: Se l'utente clicca "Rispondi", va a social@2mmondani.it
            if (!empty($_ENV['MAIL_REPLY_TO'])) {
                $this->mail->addReplyTo($_ENV['MAIL_REPLY_TO'], $_ENV['SITE_NAME']);
            }

            $this->mail->isHTML(true);
            
        } catch (Exception $e) {
            error_log("MailService Constructor Error: " . $e->getMessage());
        }
    }

    public function sendLeadNotifications($data) {
        // error_log("MailService: Inizio procedura invio per " . $data['email']);

        try {
            // --- 1. INVIO EMAIL ALL'AMMINISTRAZIONE ---
            $this->mail->clearAllRecipients();
            $this->mail->clearAttachments();

            // Aggiunta Destinatari
            $this->addAddresses($_ENV['MAIL_TO'], 'addAddress');
            
            if (!empty($_ENV['MAIL_CC'])) {
                $this->addAddresses($_ENV['MAIL_CC'], 'addCC');
            }

            if (!empty($_ENV['MAIL_BCC'])) {
                $this->addAddresses($_ENV['MAIL_BCC'], 'addBCC');
            }

            $this->mail->Subject = $_ENV['SUBJECT'] . ": " . $data['nome'] . " " . ($data['cognome'] ?? '');
            $this->mail->Body    = $this->renderTemplate('email-admin', $data);
            
            $this->mail->send();
            // error_log("MailService: Email ADMIN inviata.");

            // --- 2. INVIO EMAIL DI CONFERMA AL CLIENTE ---
            $this->mail->clearAllRecipients(); 
            // Rimuoviamo CC e BCC per il cliente per privacy
            $this->mail->clearCCs();
            $this->mail->clearBCCs();
            
            $this->mail->addAddress($data['email'], $data['nome']);
            
            $this->mail->Subject = "Conferma Richiesta - " . $_ENV['SITE_NAME'];
            $this->mail->Body    = $this->renderTemplate('email-user', $data);
            
            $this->mail->send();
            // error_log("MailService: Email CLIENTE inviata.");
            
            return true;

        } catch (Exception $e) {
            error_log("MailService CRITICAL ERROR: " . $e->getMessage());
            error_log("PHPMailer ErrorInfo: " . $this->mail->ErrorInfo);
            return false;
        }
    }

    private function addAddresses($emailString, $method) {
        if (empty($emailString)) return;
        
        $emails = array_map('trim', explode(',', $emailString));
        
        foreach ($emails as $email) {
            if (!empty($email)) {
                try {
                    $this->mail->$method($email);
                } catch (Exception $e) {
                    error_log("MailService: Errore aggiunta indirizzo $email");
                }
            }
        }
    }

    private function renderTemplate($templateName, $data) {
        ob_start();
        extract($data);
        $templatePath = __DIR__ . "/../../templates/{$templateName}.php";
        if (file_exists($templatePath)) {
            include $templatePath;
        } else {
            return "Errore template mancante.";
        }
        return ob_get_clean();
    }
}