var mongoose = require('mongoose'),
	Schema = mongoose.Schema; //Interactuar con el esquema de la base de datos

var Listas = new Schema({
	name : String
}, {collection: 'lists'}); //collection: nombre de la tabla en robomongo.

mongoose.model('lists', Listas); //Exporta la coleccion para poder ser utilizada.