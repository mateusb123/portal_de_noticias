module.exports.renderHome = function(app, req, res) {
	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.noticiasModel(connection);

	noticiasModel.getUltimasNoticias((error, result)=>{
		res.render('home/index', {values: result});
	});
}