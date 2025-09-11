<?php

require  'ClassAutoLoad.php';

$mailCnt = [
    'name_from' => 'ICS 2.2',
    'mail_from' => 'no-reply@icsacademy.com',
    'name_to' => $name,
    'mail_to' =>$email,
    'subject' => 'Welcome to ICS Academy',
 'body' => "
        <html>
        <head>
          <title>Complete Your Registration</title>
        </head>
        <body>
          <p>Hello {$name},</p>
          <p>You requested an account on <b>ICS 2.2</b>.</p>
          <p>In order to use this account, please click the link below to complete your registration:</p>
          <p><a href='#'>Click Here</a> to Complete Registration</p>
          <p>Regards,<br>Systems Admin<br>ICS 2.2</p>
        </body>
        </html>
    "
];

$ObjSendMail->Send_Mail($config, $mailCnt);
