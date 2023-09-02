// Importe as dependências
const express = require('express');

// Crie uma instância do aplicativo Express
const app = express();

// Defina uma rota de exemplo
app.get('/', (req, res) => {
  res.send('Olá, Mundo!');
});

// Defina a porta em que o servidor irá ouvir
const PORT = process.env.PORT || 3000;

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
