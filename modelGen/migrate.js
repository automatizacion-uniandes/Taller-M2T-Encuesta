//Agregar modulos

ENCUESTA.insertModulo(
	{
	idmodulo: 0
	nombre: Modulo de Datos Personales
	esinicial: 1
	}	
);
ENCUESTA.insertModulo(
	{
	idmodulo: 1
	nombre: Modulo de Ingresos
	esinicial: 0
	}	
);
ENCUESTA.insertModulo(
	{
	idmodulo: 2
	nombre: Modulo Universitario
	esinicial: 0
	}	
);

//Agregar preguntas
			
			ENCUESTA.insertPregunta({
			idpregunta: 0,
			pregunta: ¿Cual es su nombre?,
			modulo: 0,
			espreguntainicial: 1,
			tipo: 0,
			siguientepregunta: 1,
			siguientemodulo: -1
			});
			
			ENCUESTA.insertPregunta({
			idpregunta: 1,
			pregunta: ¿Cual es su edad?,
			modulo: 0,
			espreguntainicial: 0,
			tipo: 2,
			siguientepregunta: -1,
			siguientemodulo: -1
			});
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 0,
			respuesta: 18 años o mas,
			pregunta: 1,
			siguientepregunta: 2,
			siguientemodulo:-1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 1,
			respuesta: Menos de 18,
			pregunta: 1,
			siguientepregunta: 3,
			siguientemodulo:-1;
			}
			);
			
			ENCUESTA.insertPregunta({
			idpregunta: 2,
			pregunta: Cual es su estado civil?,
			modulo: 0,
			espreguntainicial: 0,
			tipo: 2,
			siguientepregunta: -1,
			siguientemodulo: -1
			});
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 2,
			respuesta: Casado,
			pregunta: 2,
			siguientepregunta: 4,
			siguientemodulo:-1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 3,
			respuesta: Soltero,
			pregunta: 2,
			siguientepregunta: 3,
			siguientemodulo:-1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 4,
			respuesta: Union Libre,
			pregunta: 2,
			siguientepregunta: 4,
			siguientemodulo:-1;
			}
			);
			
			ENCUESTA.insertPregunta({
			idpregunta: 3,
			pregunta: Cual es su grado de escolaridad?,
			modulo: 0,
			espreguntainicial: 0,
			tipo: 2,
			siguientepregunta: -1,
			siguientemodulo: -1
			});
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 5,
			respuesta: Bachiller,
			pregunta: 3,
			siguientepregunta: -1,
			siguientemodulo:-1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 6,
			respuesta: Tecnico,
			pregunta: 3,
			siguientepregunta: -1,
			siguientemodulo:1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 7,
			respuesta: Tecnologo,
			pregunta: 3,
			siguientepregunta: -1,
			siguientemodulo:1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 8,
			respuesta: Universitario,
			pregunta: 3,
			siguientepregunta: -1,
			siguientemodulo:2;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 9,
			respuesta: Postgrado,
			pregunta: 3,
			siguientepregunta: -1,
			siguientemodulo:2;
			}
			);
			
			ENCUESTA.insertPregunta({
			idpregunta: 4,
			pregunta: Hace cuanto vive con su pareja?,
			modulo: 0,
			espreguntainicial: 0,
			tipo: 2,
			siguientepregunta: -1,
			siguientemodulo: -1
			});
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 10,
			respuesta: Menos de dos años,
			pregunta: 4,
			siguientepregunta: -1,
			siguientemodulo:-1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 11,
			respuesta: 2 años o mas,
			pregunta: 4,
			siguientepregunta: -1,
			siguientemodulo:-1;
			}
			);
			
			ENCUESTA.insertPregunta({
			idpregunta: 5,
			pregunta: Cuales son sus ingresos mensuales?,
			modulo: 1,
			espreguntainicial: 1,
			tipo: 2,
			siguientepregunta: -1,
			siguientemodulo: -1
			});
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 12,
			respuesta: Menos de un salario minimo,
			pregunta: 5,
			siguientepregunta: 7,
			siguientemodulo:-1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 13,
			respuesta: Un salario minimo,
			pregunta: 5,
			siguientepregunta: 7,
			siguientemodulo:-1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 14,
			respuesta: Mas de un salario minimo,
			pregunta: 5,
			siguientepregunta: 6,
			siguientemodulo:-1;
			}
			);
			
			ENCUESTA.insertPregunta({
			idpregunta: 6,
			pregunta: Cuantos trabajos tiene?,
			modulo: 1,
			espreguntainicial: 0,
			tipo: 2,
			siguientepregunta: -1,
			siguientemodulo: -1
			});
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 15,
			respuesta: 1,
			pregunta: 6,
			siguientepregunta: 8,
			siguientemodulo:-1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 16,
			respuesta: 2,
			pregunta: 6,
			siguientepregunta: 8,
			siguientemodulo:-1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 17,
			respuesta: Mas de dos,
			pregunta: 6,
			siguientepregunta: 8,
			siguientemodulo:-1;
			}
			);
			
			ENCUESTA.insertPregunta({
			idpregunta: 7,
			pregunta: Usted es trabajador independiente?,
			modulo: 1,
			espreguntainicial: 0,
			tipo: 2,
			siguientepregunta: -1,
			siguientemodulo: -1
			});
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 18,
			respuesta: si.,
			pregunta: 7,
			siguientepregunta: 9,
			siguientemodulo:-1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 19,
			respuesta: no.,
			pregunta: 7,
			siguientepregunta: 8,
			siguientemodulo:-1;
			}
			);
			
			ENCUESTA.insertPregunta({
			idpregunta: 8,
			pregunta: Su/s contrato/s es/son,
			modulo: 1,
			espreguntainicial: 0,
			tipo: 1,
			siguientepregunta: -1,
			siguientemodulo: -1
			});
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 20,
			respuesta: A termino fijo,
			pregunta: 8,
			siguientepregunta: -1,
			siguientemodulo:-1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 21,
			respuesta: Prestacion de servicios,
			pregunta: 8,
			siguientepregunta: 9,
			siguientemodulo:-1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 22,
			respuesta: A termino indefinido,
			pregunta: 8,
			siguientepregunta: -1,
			siguientemodulo:-1;
			}
			);
			
			ENCUESTA.insertPregunta({
			idpregunta: 9,
			pregunta: Cotiza salud y pension?,
			modulo: 1,
			espreguntainicial: 0,
			tipo: 2,
			siguientepregunta: -1,
			siguientemodulo: -1
			});
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 23,
			respuesta: si,
			pregunta: 9,
			siguientepregunta: -1,
			siguientemodulo:-1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 24,
			respuesta: no,
			pregunta: 9,
			siguientepregunta: -1,
			siguientemodulo:-1;
			}
			);
			
			ENCUESTA.insertPregunta({
			idpregunta: 10,
			pregunta: Cuantos años estudio en la universidad?,
			modulo: 2,
			espreguntainicial: 1,
			tipo: 2,
			siguientepregunta: -1,
			siguientemodulo: -1
			});
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 25,
			respuesta: 4 años,
			pregunta: 10,
			siguientepregunta: -1,
			siguientemodulo:-1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 26,
			respuesta: mas de 4 años y menos de 8,
			pregunta: 10,
			siguientepregunta: -1,
			siguientemodulo:-1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 27,
			respuesta: 8 años o mas,
			pregunta: 10,
			siguientepregunta: -1,
			siguientemodulo:-1;
			}
			);
			
			ENCUESTA.insertPregunta({
			idpregunta: 11,
			pregunta: Estudio en una universidad?,
			modulo: 2,
			espreguntainicial: 0,
			tipo: 1,
			siguientepregunta: -1,
			siguientemodulo: -1
			});
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 28,
			respuesta: Publica,
			pregunta: 11,
			siguientepregunta: 12,
			siguientemodulo:-1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 29,
			respuesta: Privada,
			pregunta: 11,
			siguientepregunta: 13,
			siguientemodulo:-1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 30,
			respuesta: Privada y publica,
			pregunta: 11,
			siguientepregunta: 12,
			siguientemodulo:-1;
			}
			);
			
			ENCUESTA.insertPregunta({
			idpregunta: 12,
			pregunta: Usted termino todos sus estudios?,
			modulo: 2,
			espreguntainicial: 0,
			tipo: 2,
			siguientepregunta: -1,
			siguientemodulo: -1
			});
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 31,
			respuesta: si,
			pregunta: 12,
			siguientepregunta: -1,
			siguientemodulo:-1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 32,
			respuesta: no,
			pregunta: 12,
			siguientepregunta: -1,
			siguientemodulo:-1;
			}
			);
			
			ENCUESTA.insertPregunta({
			idpregunta: 13,
			pregunta: Usted Pago?,
			modulo: 2,
			espreguntainicial: 0,
			tipo: 2,
			siguientepregunta: -1,
			siguientemodulo: -1
			});
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 33,
			respuesta: Menos de un millon,
			pregunta: 13,
			siguientepregunta: -1,
			siguientemodulo:-1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 34,
			respuesta: Mas de un millon y menos de 4 millones,
			pregunta: 13,
			siguientepregunta: -1,
			siguientemodulo:-1;
			}
			);
			ENCUESTA.insertRespuesta(
			{
			idrespuesta: 35,
			respuesta: Mas de 4 millones,
			pregunta: 13,
			siguientepregunta: -1,
			siguientemodulo:-1;
			}
			);
			
			ENCUESTA.insertPregunta({
			idpregunta: 14,
			pregunta: Cual es el nombre de su universidad?,
			modulo: 2,
			espreguntainicial: 0,
			tipo: 0,
			siguientepregunta: -1,
			siguientemodulo: 1
			});



