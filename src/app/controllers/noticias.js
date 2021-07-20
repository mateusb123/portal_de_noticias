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
    noticiasModel.getNoticia(14, function(error, result){
        res.render('noticias/noticia', {noticia: result})
    });
}