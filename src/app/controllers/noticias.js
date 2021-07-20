module.exports.renderNoticias = function(app, req, res) {
	var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasModel(connection);
    noticiasModel.getNoticias((error, result) => {
        res.render('noticias/noticias', { noticias: result });
    });
}
module.exports.renderNoticiaSingle = function(app, req, res) {
	var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasModel(connection);

    var id_noticia = req.query;

    noticiasModel.getNoticia(id_noticia, function(error, result){
        console.log(result)
        res.render('noticias/noticia', {noticia: result})
    });
}