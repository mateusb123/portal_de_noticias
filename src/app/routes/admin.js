module.exports = function(app) {
    app.get('/admin', (req,res)=>{
        res.render('admin/index');
    });
    app.post('/news/save', (req,res)=>{
        var newsData = req.body;
        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;
        noticiasModel.saveNews(connection, newsData, (error, result) => {
            res.redirect('/noticias');
        });
    });
}