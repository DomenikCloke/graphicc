import React from 'react';
const express = require('express');
const app = express();

// Importante: ajustar para Codespaces
const port = process.env.PORT || 3001;
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

// Iniciar servidor
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor ejecutándose en puerto ${port}`);
});

const App = () => {
    return (
        <div>
            <h1>Graphicc App</h1>
        </div>
    );
};

export default App;