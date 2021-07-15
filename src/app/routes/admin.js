module.exports = function(app) {
    app.get('/admin', (req,res)=>{
        res.render('admin/index');
    });
    app.post('/news/save', (req,res)=>{
        var newsData = req.body;
        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.noticiasModel(connection);
        noticiasModel.saveNews(newsData, (error, result) => {
            res.redirect('/noticias');
        });
    });
}