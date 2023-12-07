import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu projeto backend!');
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
