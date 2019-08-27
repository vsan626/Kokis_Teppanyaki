let express = require("express"),
    app = express();

app.set('view engine', 'ejs');
app.use( express.static( "public" ) );

//=================
//landing page
//=================
app.get("/kokisgrille", function(req, res){
    res.render("index");
})

//=================
//Menu
//=================
app.get("/kokisgrille/menu", function(req, res){
    res.render("kokis-menu")
})

//=================
//Our Story
//=================
app.get("/kokisgrille/story", function(req, res){
    res.render("kokis-story");
})

//=================
//Contact us
//=================
app.get("/kokisgrille/contact", function(req, res){
    res.render("kokis-contact");
})

app.listen(3000, function(){
    console.log("~Koki's webpage Started~")
})