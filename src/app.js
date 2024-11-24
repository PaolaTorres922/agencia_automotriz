const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();


app.use(cors());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  
  password: 'Pato9052!',  
  database: 'agencia_automotriz',  
  port: 3307  
});


db.connect((err) => {
  if (err) {
    console.log('Error conectando a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos MySQL');
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});
