function Noticias(connection){
    this._connection = connection;
}
Noticias.prototype.getNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias order by data_news desc', callback);
}
Noticias.prototype.getNoticia = function(id_noticia, callback){
    this._connection.query(`SELECT * FROM noticias where id_noticia = ${id_noticia.id_noticia}`, callback);
}
Noticias.prototype.saveNews = function(datas, callback){
    this._connection.query(`INSERT INTO noticias (title, noticia, resume, author, data_news) VALUES ('${datas.title}','${datas.content}','${datas.resume}','${datas.author}','${datas.date}')`, callback);
}
Noticias.prototype.getUltimasNoticias = function(callback){
	this._connection.query('SELECT * FROM noticias order by data_news desc limit 4', callback);
}

module.exports = function(){
    return Noticias;
}