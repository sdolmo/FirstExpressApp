var express = require("express");
var app = express();


// "/" "Hi there!"
app.get("/", function(req, res){
  res.send("Hi there! ");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
  res.send("Goodbye!");
})
// "/dog" => "Meow!"
app.get("/dog", function(req, res){
  console.log("I'm here");
  res.send("Meow!");
})

// Catch all rout for those that don't exist
app.get("*", function(req, res){
  res.send("Nope, ");
});

// Tell Express to listen for request (start server)
app.listen(3000, function(){
  console.log("Serving demo on port 3000")
});
