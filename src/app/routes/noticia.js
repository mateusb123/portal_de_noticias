module.exports = function(app) {
    app.get('/noticia', (req,res) => {
        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.noticiasModel(connection);
        noticiasModel.getNoticia(3, function(error, result){
            res.render('noticias/noticia', {noticia: result})
        });
    });
}