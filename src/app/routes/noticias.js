module.exports = function(app) {
    app.get('/noticias', (req, res) => {
        app.app.controllers.noticias.renderNoticias(app, req, res);
    });
    app.get('/noticia', (req,res) => {
        app.app.controllers.noticias.renderNoticiaSingle(app, req, res);
    });
}