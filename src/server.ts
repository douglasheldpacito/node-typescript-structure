import express from 'express';
import '@controllers/UsersController';

const app = express();

app.get('/', (request, response) => response.json({ mensagem: 'Hello World' }));

app.listen(3333, () => {
    console.log('🚀 Server started on http://localhost:3333');
});
