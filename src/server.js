const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pato9052!',
  database: 'agencia_automotriz',
  port: 3307,
});

db.connect((err) => {
  if (err) throw err;
  console.log('Base de datos conectada');
});


app.get('/clientes', (req, res) => {
  const sql = 'SELECT * FROM Clientes';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });const express = require('express');
  const mysql = require('mysql');
  const cors = require('cors');
  const dayjs = require('dayjs');
  
  const app = express();
  app.use(express.json());
  app.use(cors());
  
  
  const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pato9052!',
    database: 'agencia_automotriz',
    port: 3307,
  });
  

  db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL');
  });
  
  
  app.get('/clientes', (req, res) => {
    const sql = 'SELECT * FROM Clientes';
    db.query(sql, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  
  app.get('/vehiculos', (req, res) => {
    const sql = 'SELECT * FROM Vehiculos';
    db.query(sql, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  
  app.get('/servicios', (req, res) => {
    const sql = 'SELECT * FROM Servicios';
    db.query(sql, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  
  app.get('/ofertas', (req, res) => {
    const sql = 'SELECT * FROM Ofertas';
    db.query(sql, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  
  app.post('/clientes', (req, res) => {
    const { nombre, apellido, direccion, telefono, email } = req.body;
    const sql = 'INSERT INTO Clientes (nombre, apellido, direccion, telefono, email) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [nombre, apellido, direccion, telefono, email], (err, result) => {
      if (err) throw err;
      res.json({ message: 'Cliente creado', id: result.insertId });
    });
  });
  
  
  app.post('/vehiculos', (req, res) => {
    const { marca, modelo, anio, color, placa } = req.body;
    const sql = 'INSERT INTO Vehiculos (marca, modelo, anio, color, placa) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [marca, modelo, anio, color, placa], (err, result) => {
      if (err) throw err;
      res.json({ message: 'Vehículo creado', id: result.insertId });
    });
  });
  
  
  app.post('/servicios', (req, res) => {
    const { tipo_servicio, fecha, hora, costo, cliente_id } = req.body;
    const sql = 'INSERT INTO Servicios (tipo_servicio, fecha, hora, costo, cliente_id) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [tipo_servicio, fecha, hora, costo, cliente_id], (err, result) => {
      if (err) throw err;
      res.json({ message: 'Servicio creado', id: result.insertId });
    });
  });
  
  
  app.post('/ofertas', (req, res) => {
    const { tipo_oferta, fecha, hora, costo, cliente_id } = req.body;
    const sql = 'INSERT INTO Ofertas (tipo_oferta, fecha, hora, costo, cliente_id) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [tipo_oferta, fecha, hora, costo, cliente_id], (err, result) => {
      if (err) throw err;
      res.json({ message: 'Oferta creada', id: result.insertId });
    });
  });
  
  
  app.put('/clientes/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, direccion, telefono, email } = req.body;
    const sql = 'UPDATE Clientes SET nombre = ?, apellido = ?, direccion = ?, telefono = ?, email = ? WHERE id = ?';
    db.query(sql, [nombre, apellido, direccion, telefono, email, id], (err) => {
      if (err) throw err;
      res.json({ message: 'Cliente actualizado' });
    });
  });
  
  
  app.put('/vehiculos/:id', (req, res) => {
    const { id } = req.params;
    const { marca, modelo, anio, color, placa } = req.body;
    const sql = 'UPDATE Vehiculos SET marca = ?, modelo = ?, anio = ?, color = ?, placa = ? WHERE id = ?';
    db.query(sql, [marca, modelo, anio, color, placa, id], (err) => {
      if (err) throw err;
      res.json({ message: 'Vehículo actualizado' });
    });
  });
  
  
  app.put('/servicios/:id', (req, res) => {
    const { id } = req.params;
    const { tipo_servicio, fecha, hora, costo, cliente_id } = req.body;
    const sql = 'UPDATE Servicios SET tipo_servicio = ?, fecha = ?, hora = ?, costo = ?, cliente_id = ? WHERE id = ?';
    db.query(sql, [tipo_servicio, fecha, hora, costo, cliente_id, id], (err) => {
      if (err) throw err;
      res.json({ message: 'Servicio actualizado' });
    });
  });
  
  
  app.put('/ofertas/:id', (req, res) => {
    const { id } = req.params;
    const { tipo_oferta, fecha, hora, costo, cliente_id } = req.body;
    const sql = 'UPDATE Ofertas SET tipo_oferta = ?, fecha = ?, hora = ?, costo = ?, cliente_id = ? WHERE id = ?';
    db.query(sql, [tipo_oferta, fecha, hora, costo, cliente_id, id], (err) => {
      if (err) throw err;
      res.json({ message: 'Oferta actualizada' });
    });
  });
  
  
  app.get('/clientes/verificar', (req, res) => {
    const sql = `
      SELECT Clientes.id AS cliente_id, Clientes.nombre, MAX(Servicios.fecha) AS ultima_fecha_servicio
      FROM Clientes
      LEFT JOIN Servicios ON Clientes.id = Servicios.cliente_id
      GROUP BY Clientes.id
    `;
    db.query(sql, (err, results) => {
      if (err) throw err;
  
      const hoy = dayjs();
  
      results.forEach((cliente) => {
        const ultimaFecha = cliente.ultima_fecha_servicio
          ? dayjs(cliente.ultima_fecha_servicio)
          : null;
  
        if (ultimaFecha) {
          const mesesSinServicio = hoy.diff(ultimaFecha, 'month');
  
          if (mesesSinServicio > 10) {
            const deleteSql = `DELETE FROM Clientes WHERE id = ?`;
            db.query(deleteSql, [cliente.cliente_id], (deleteErr) => {
              if (deleteErr) throw deleteErr;
              console.log(`Cliente ${cliente.nombre} eliminado.`);
            });
          } else if (mesesSinServicio > 6) {
            const insertOfertaSql = `
              INSERT INTO Ofertas (tipo_oferta, fecha, hora, costo, cliente_id)
              VALUES ('Descuento', CURDATE(), CURTIME(), 500, ?)
            `;
            db.query(insertOfertaSql, [cliente.cliente_id], (insertErr) => {
              if (insertErr) throw insertErr;
              console.log(`Oferta creada para el cliente ${cliente.nombre}.`);
            });
          }
        }
      });
  
      res.json({ message: 'Verificación de clientes completada.' });
    });
  });
  
 
  app.delete('/ofertas/expirar', (req, res) => {
    const sql = `DELETE FROM Ofertas WHERE fecha < DATE_SUB(CURDATE(), INTERVAL 3 MONTH)`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.json({ message: `${result.affectedRows} ofertas eliminadas por expiración.` });
    });
  });
  
 
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  });
  
});


app.post('/clientes', (req, res) => {
  const { nombre, apellido, direccion, telefono, email } = req.body;
  const sql = 'INSERT INTO Clientes (nombre, apellido, direccion, telefono, email) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [nombre, apellido, direccion, telefono, email], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Cliente creado', id: result.insertId });
  });
});


app.put('/clientes/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, direccion, telefono, email } = req.body;
  const sql = 'UPDATE Clientes SET nombre = ?, apellido = ?, direccion = ?, telefono = ?, email = ? WHERE id = ?';
  db.query(sql, [nombre, apellido, direccion, telefono, email, id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Cliente actualizado' });
  });
});



app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
