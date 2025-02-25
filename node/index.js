const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const connection = mysql.createConnection(config);

app.get('/', (req, res) => {
    connection.query('SELECT * FROM people', (error, results) => {
        if (error) {
            throw error
        };
        let html = '<h1>Full Cycle Rocks!</h1>';
        html += '<ul>';
        for(let people of results) {   
            html += `<li>${people.name}</li>`;
        }
        html += '</ul>';
        res.send(html);
    });
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});
