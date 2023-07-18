<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $mensagem = $_POST['mensagem'];

  // Configuração para enviar e-mail
  $to = 'contato@samuellnogueira.com';
  $subject = 'Novo formulário de contato';
  $message = "Nome: $nome\n\nE-mail: $email\n\nMensagem: $mensagem";
  $headers = "From: $email\r\n" .
             "Reply-To: $email\r\n" .
             "X-Mailer: PHP/" . phpversion();

  // Envio do e-mail
  if (mail($to, $subject, $message, $headers)) {
    echo "Obrigado! Sua mensagem foi enviada.";
  } else {
    echo "Desculpe, ocorreu um erro ao enviar a mensagem.";
  }
}
?>