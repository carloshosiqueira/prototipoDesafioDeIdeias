const con = require("../connect/connect").con;

const read = (req, res) => {
    con.query("SELECT * FROM Entrega", (err, result) => {
        if(err)
            res.json(err);
        else
            res.json(result);
    });
}

module.exports = {
    read
}