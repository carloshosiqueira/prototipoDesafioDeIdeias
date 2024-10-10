const con = require("../connect/connect").con;

const addEtiqueta = (req, res) => {
    const { numeroDoPedido, idEtiqueta } = req.body;
    const query = 'INSERT INTO Etiquetas (numeroDoPedido, idEtiqueta) VALUES (?, ?)';
    
    con.query(query, [numeroDoPedido, idEtiqueta], (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json({ id: result.insertId });
        }
    });
};

const read = (req, res) => {
    con.query("SELECT * FROM etiquetas", (err, result) => {
        if(err)
            res.json(err);
        else
            res.json(result);
    });
}

const readById = (req, res) => {
        const { numeroDoPedido } = req.params;
        const query = 'SELECT * FROM Etiquetas WHERE numeroDoPedido = ?';
    
        con.query(query, [numeroDoPedido], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.json(result);
            }
        });
    };


module.exports = {
    addEtiqueta,
    read,
    readById,
}