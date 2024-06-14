<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro - SimpleBank</title>
    <link rel="stylesheet" href="src/css/cadastro.css"> <!-- Seu arquivo de estilos -->
</head>
<body>
    <header class="header">
        <!-- Aqui vai o seu cabeçalho (header) -->
    </header>

    <main>
        <section class="cadastro-section">
            <div class="container">
                <h2>Cadastro</h2>
                <form action="processa_cadastro.php" method="post" enctype="multipart/form-data">
                    <div class="form-group">
                        <label for="nome">Nome Completo</label>
                        <input type="text" id="nome" name="nome" required>
                    </div>
                    <div class="form-group">
                        <label for="cpf">CPF</label>
                        <input type="text" id="cpf" name="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder="123.456.789-00" required>
                    </div>
                    <div class="form-group">
                        <label for="dataNascimento">Data de Nascimento</label>
                        <input type="date" id="dataNascimento" name="dataNascimento" required>
                    </div>
                    <div class="form-group">
                        <label for="senha">Senha</label>
                        <input type="password" id="senha" name="senha" required>
                    </div>
                    <div class="form-group">
                        <label for="avatar">Avatar</label>
                        <input type="file" id="avatar" name="avatar">
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </section>
    </main>

    <footer>
        <!-- Aqui vai o seu rodapé (footer) -->
    </footer>

    <script src="src/javascript/script.js"></script> <!-- Seu arquivo de scripts -->
</body>
</html>
