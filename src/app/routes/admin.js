module.exports = function(app) {
    app.get('/admin', (req,res)=>{
        app.app.controllers.admin.renderAdmin(app, req, res);
    });
    app.post('/news/save', (req,res)=>{
        app.app.controllers.admin.newsSave(app, req, res);
    });
}