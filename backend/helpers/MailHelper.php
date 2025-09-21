<?php
namespace Helpers;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

$dotenv->load();
class MailHelper {
    
    public static function sendWelcomeEmail($toEmail, $toName) {
        try {
            // Create PHPMailer instance
            $mail = new PHPMailer(true);

            // Server settings
            $mail->SMTPDebug = 0; // 
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = $_ENV["MAIL_USERNAME"]; // Gmail
            $mail->Password   = $_ENV["MAIL_PASSWORD"];   // Gmail App Password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port       = 465;

            // Recipients
            $mail->setFrom("opololinda@gmail.com", "CampusClubs team");

           
            $mail->addAddress($toEmail, $toName);


            // Email content
            $mail->isHTML(true);
            $mail->Subject = 'Welcome to CampusClubs';
            $mail->Body    = "Hello <b>$toName</b>, welcome to CampusClubs! <b>Enjoy.</b>";

            $mail->send();
            error_log("Welcome email sent to $toEmail");
            return true;

        } catch (Exception $e) {
         
            error_log("Mailer failed: " . $e->getMessage());
            return false;
        }
    }
}
