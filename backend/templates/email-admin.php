<!DOCTYPE html>
<html>
<head>
<style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
    .header { background-color: #1a1a1a; padding: 20px; text-align: center; border-bottom: 4px solid #8B0000; }
    .header h1 { color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 2px; }
    .content { padding: 30px; color: #333; }
    .label { font-size: 12px; text-transform: uppercase; color: #888; margin-top: 15px; }
    .value { font-size: 18px; font-weight: bold; color: #1a1a1a; border-bottom: 1px solid #eee; padding-bottom: 5px; }
    .footer { background-color: #eee; text-align: center; padding: 15px; font-size: 12px; color: #666; }
    .badge { background: #8B0000; color: white; padding: 5px 10px; border-radius: 4px; font-size: 12px; display: inline-block; margin-bottom: 20px; }
</style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>ARAN <span style="color:#8B0000">CUCINE</span> LEAD</h1>
        </div>
        <div class="content">
            <span class="badge">NUOVA RICHIESTA PROMO NATALE</span>
            
            <div class="label">Nome Cliente</div>
            <div class="value"><?= $nome ?> <?= $cognome ?></div>

            <div class="label">Contatti</div>
            <div class="value">
                <a href="mailto:<?= $email ?>" style="color:#8B0000; text-decoration:none"><?= $email ?></a> <br>
                <a href="tel:<?= $telefono ?>" style="color:#8B0000; text-decoration:none"><?= $telefono ?></a>
            </div>

            <div class="label">Messaggio</div>
            <div class="value" style="font-weight: normal; font-style: italic;">
                "<?= $messaggio ?: 'Nessun messaggio aggiuntivo.' ?>"
            </div>
            
            <div class="label">Data Richiesta</div>
            <div class="value" style="font-size: 14px;"><?= date('d/m/Y H:i') ?></div>
        </div>
        <div class="footer">
            Email generata automaticamente dal sistema Aran Piacenza.
        </div>
    </div>
</body>
</html>