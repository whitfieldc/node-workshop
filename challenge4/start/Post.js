// Require mongoose
// var mongoose = require('mongoose');

var rethinkConfig = {
        host: "localhost",
        port: 28015,
        authKey: "",
        db: "thinkyex"
    };
var thinky = require('thinky')(rethinkConfig);
var type = thinky.type;

// Configure conenction URL (only needs to happen once per app)
// mongoose.connect('CHANGEME');

// Create a database schema for our Post object, which will describe both it's
// data and it's behavior.
var postSchema = {
    title:String,
    content:String
};

var Post = thinky.createModel("Post", postSchema);

// Create a model object constructor that will have ODM functionality like .save()...
// var Post = mongoose.model('Post', postSchema);

// Expose out model as the module interface
module.exports = Post;