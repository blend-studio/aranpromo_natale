<!DOCTYPE html>
<html>
<head>
<style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
    .hero { 
        background-color: #8B0000; 
        background-image: linear-gradient(135deg, #8B0000 0%, #5e0000 100%);
        padding: 40px 20px; 
        text-align: center; 
        color: white;
    }
    .hero h1 { font-size: 32px; margin: 0; text-transform: uppercase; letter-spacing: -1px; }
    .hero p { font-size: 18px; opacity: 0.9; margin-top: 10px; }
    .content { padding: 40px 30px; text-align: center; color: #444; }
    .tv-box { background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 20px 0; border: 1px dashed #ccc; }
    .btn { 
        background-color: #1a1a1a; 
        color: #ffffff; 
        text-decoration: none; 
        padding: 15px 30px; 
        font-weight: bold; 
        text-transform: uppercase; 
        display: inline-block; 
        margin-top: 20px;
        border-radius: 50px;
    }
    .footer { background-color: #1a1a1a; color: #888; padding: 20px; text-align: center; font-size: 12px; }
</style>
</head>
<body>
    <div class="container">
        <div class="hero">
            <h1>Richiesta Ricevuta!</h1>
            <p>Grazie <?= $nome ?>, la tua promo Natale è bloccata.</p>
        </div>

        <div class="content">
            <h2 style="color: #1a1a1a;">Il prossimo passo?</h2>
            <p style="line-height: 1.6;">
                Un nostro consulente ti contatterà al numero <strong><?= $telefono ?></strong> entro 24 ore lavorative per fissare un appuntamento in showroom.
            </p>

            <div class="tv-box">
                <h3 style="margin:0; color: #8B0000;">RICAPITOLANDO L'OFFERTA:</h3>
                <p>✅ 4 Elettrodomestici in Omaggio</p>
                <p>✅ Smart TV Samsung 50" Inclusa</p>
                <p style="font-size: 12px; color: #888;">*Valida per le prime 15 cucine</p>
            </div>

            <p>Ti aspettiamo in showroom a Pontenure!</p>

            <a href="https://piacenza.arancucine.it" class="btn">Vai al sito</a>
        </div>

        <div class="footer">
            ARAN CUCINE STORE PIACENZA<br>
            Via Roma 24, Pontenure (PC)<br>
            Tel: 0523 718895
        </div>
    </div>
</body>
</html>