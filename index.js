var express = require("express");
var mongodb = require('mongodb');
var mongoose = require('mongoose');


var MongoClient = mongodb.MongoClient;

// getting the exp app
var app = express();

var port = process.env.PORT || 3000;

var server = app.listen(port, function(){
    console.log('listening to request on the port ',port);

    app.use(express.static('public'));

    //Set up default mongoose connection
    var mongoDB = 'mongodb://localhost/audible-captcha';
    mongoose.connect(mongoDB, { useNewUrlParser: true });

    //Get the default connection
    var db = mongoose.connection;


    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    const schema =  mongoose.Schema;
    const object_schema =  new schema({
        "link" : String,
        "name" : String
    })
    const object_model = mongoose.model("voice",object_schema)
    //Generating random ids:
    var collection_names=["animals","instruments"]
    var collection_name = collection_names[Math.floor(Math.random() * collection_names.length)];
    var collection = db[collection_name]
    var id_list = [];     //this part is not done
    
    var random_id = id_list[Math.floor(Math.random() * id_list.length)];
    var object = object_model.findOne({_id: random_id}) 
    module.exports = object;
});







