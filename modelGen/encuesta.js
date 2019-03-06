//elimina y crea la tabla encuesta respuestas
ENCUESTA.encuesta_respuestasTable = function()
{
db.run("DROP TABLE IF EXISTS encuesta_respuestas");
db.run("CREATE TABLE IF NOT EXISTS encuesta_respuestas (idencuesta_respuestas INTEGER PRIMARY KEY AUTOINCREMENT,
	pregunta0 TEXT,
	pregunta1 INTEGER,
	pregunta2 INTEGER,
	pregunta3 INTEGER,
	pregunta4 INTEGER,
	pregunta5 INTEGER,
	pregunta6 INTEGER,
	pregunta7 INTEGER,
		pregunta8_20 INTEGER,
		pregunta8_21 INTEGER,
		pregunta8_22 INTEGER,
	pregunta9 INTEGER,
	pregunta10 INTEGER,
		pregunta11_28 INTEGER,
		pregunta11_29 INTEGER,
		pregunta11_30 INTEGER,
	pregunta12 INTEGER,
	pregunta13 INTEGER,
	pregunta14 TEXT,
)");
console.log("La tabla encuesta_respuestas ha sido correctamente creada");
}

