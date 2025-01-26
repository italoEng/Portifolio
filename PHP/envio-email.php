<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $assunto = htmlspecialchars($_POST['assunto']);
    $mensagem = htmlspecialchars($_POST['mensagem']);

    // Destinatário do e-mail (substitua pelo seu e-mail)
    $destinatario = "seu-email@dominio.com";

    // Monta o corpo do e-mail
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "E-mail: $email\n";
    $corpo_email .= "Assunto: $assunto\n";
    $corpo_email .= "Mensagem:\n$mensagem\n";

    // Cabeçalhos do e-mail
    $headers = "From: $nome <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Envia o e-mail
    if (mail($destinatario, $assunto, $corpo_email, $headers)) {
        // E-mail enviado com sucesso
        echo "E-mail enviado com sucesso!";
    } else {
        // Erro ao enviar o e-mail
        echo "Erro ao enviar o e-mail. Tente novamente.";
    }
} else {
    // Se o formulário não foi enviado, redireciona para a página inicial
    header("Location: index.html");
    exit;
}
?>