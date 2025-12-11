<?php
namespace App\Controllers;

use App\Models\Lead;
use App\Services\MailService;

class ContactController {

    public function store() {
        // Prendi i dati JSON grezzi
        $data = json_decode(file_get_contents("php://input"));

        // Validazione Base
        if(empty($data->nome) || empty($data->email) || empty($data->telefono)) {
            http_response_code(400);
            echo json_encode(["message" => "Dati incompleti."]);
            return;
        }

        // 1. Istanzia e usa il Model
        $lead = new Lead();
        $lead->nome = $data->nome;
        $lead->cognome = $data->cognome ?? '';
        $lead->email = $data->email;
        $lead->telefono = $data->telefono;
        $lead->messaggio = $data->messaggio ?? '';

        if($lead->create()) {
            // 2. Se salvataggio OK, usa il Service per le Mail
            $mailer = new MailService();
            $mailData = [
                'nome' => $lead->nome,
                'cognome' => $lead->cognome,
                'email' => $lead->email,
                'telefono' => $lead->telefono,
                'messaggio' => $lead->messaggio
            ];
            
            // Invio asincrono "fake" (in PHP puro l'utente aspetta l'invio, 
            // per farlo vero servirebbero le code, ma per ora va bene così)
            $mailer->sendLeadNotifications($mailData);

            http_response_code(201);
            echo json_encode(["message" => "Richiesta salvata e mail inviate."]);
        } else {
            http_response_code(503);
            echo json_encode(["message" => "Impossibile salvare il contatto nel DB."]);
        }
    }
}