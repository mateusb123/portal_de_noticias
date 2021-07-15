function Noticias(connection){
    this._connection = connection;
}
Noticias.prototype.getNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias', callback);
}
Noticias.prototype.getNoticia = function(id_noticia, callback){
    this._connection.query(`SELECT * FROM noticias where id_noticia = ${id_noticia}`, callback);
}
Noticias.prototype.saveNews = function(datas, callback){
    this._connection.query(`INSERT INTO noticias (title, noticia) VALUES ('${datas.title}','${datas.content}')`, callback);
}

module.exports = function(){
    return Noticias;
}