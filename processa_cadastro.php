<?php
// Conectar ao banco de dados
$servername = "localhost";
$username = "root"; // Usuário do MySQL (altere conforme necessário)
$password = "gab123"; // Senha do MySQL (altere conforme necessário)
$dbname = "simplebank_db"; // Nome do banco de dados

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Recebe os dados do formulário
$nome = $_POST['nome'];
$cpf = $_POST['cpf'];

// Verifica se dataNascimento não está vazio antes de usá-lo
$dataNascimento = !empty($_POST['dataNascimento']) ? $_POST['dataNascimento'] : null;

// Criptografa a senha
$senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);

// Move o arquivo de avatar para a pasta uploads
$avatar = $_FILES['avatar']['name'];
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["avatar"]["name"]);
move_uploaded_file($_FILES["avatar"]["tmp_name"], $target_file);

// Insere os dados na tabela, usando prepared statements para segurança
$stmt = $conn->prepare("INSERT INTO users (nome, cpf, data_nascimento, senha, avatar) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $nome, $cpf, $dataNascimento, $senha, $avatar);

if ($stmt->execute()) {
    echo "Novo registro criado com sucesso";
} else {
    echo "Erro: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
