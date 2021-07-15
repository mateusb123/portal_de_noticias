module.exports = function(app) {
    app.get('/noticia', (req,res) => {
        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;
        noticiasModel.getNoticia(connection, 3, function(error, result){
            res.render('noticias/noticia', {noticia: result})
        });
    });
}