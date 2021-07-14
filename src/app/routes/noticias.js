module.exports = function(app) {
    app.get('/noticias', (req, res) => {
        var connection = app.config.dbConnection();
        connection.query('select * from noticias', (error, result) => {
            res.render('noticias/noticias', { noticias: result });
        });
    });
}