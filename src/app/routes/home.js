module.exports = function(app) {
    app.get('/', (req,res)=>{
        app.app.controllers.home.renderHome(app, req, res);
    });
}