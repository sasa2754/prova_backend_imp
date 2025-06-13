const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'mysql.railway.internal',
  user: 'root',
  password: 'qTgrUOpZGtouVCLcTGBkeKnOpVYnHyTb',
  database: 'railway',
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados');
});

module.exports = connection;