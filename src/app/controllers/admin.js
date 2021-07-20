module.exports.renderAdmin = function(app, req, res) {
	res.render('admin/index', {validation: {},pastValues: {}});
}
module.exports.newsSave = function(app, req, res) {
	var newsData = req.body;
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasModel(connection);

    req.assert('title', 'Sua Noticia Precisa de um titulo para continuar!').notEmpty();
    req.assert('content', 'Sua noticia esta vazia adicione algum conteudo para continuar!').notEmpty();
    req.assert('resume', 'É obrigatorio você ter um resumo para continuar!').notEmpty();
    req.assert('author', 'Você precisa informar o author da noticia para continuar!').notEmpty();
    req.assert('resume', 'Um resumo precisa ter Mais de 10 caracters e Menos que 100!').len(10, 100);
    req.assert('date', 'É obrigatorio você informar a data da noticia para continuar!').notEmpty().isDate({format: 'YYYY-MM-DD'});

    var errors = req.validationErrors();
    if(errors){
        console.log(errors);
        res.render('admin/index', {validation: errors,pastValues: newsData});
        return;
    }

    noticiasModel.saveNews(newsData, (error, result) => {
        console.log('------------------------------ Nova Noticia ------------------------------');
        console.log(newsData);
        res.redirect('/noticias');
    });
}