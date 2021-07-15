module.exports = function(){
    this.getNoticias = function(connection, callback){
        connection.query('SELECT * FROM noticias', callback);
    }
    this.getNoticia = function(connection, id_noticia, callback){
        connection.query(`SELECT * FROM noticias where id_noticia = ${id_noticia}`, callback);
    }
    this.saveNews = function(connection, datas, callback){
        connection.query(`INSERT INTO noticias (title, noticia) VALUES ('${datas.title}','${datas.content}')`, callback);
    }
    return this;
}