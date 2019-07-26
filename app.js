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
//Our Story
//=================
app.get("/kokisgrille/story", function(req, res){
    res.render("kokis-story");
})



app.listen(3000, function(){
    console.log("~Koki's webpage Started~")
})