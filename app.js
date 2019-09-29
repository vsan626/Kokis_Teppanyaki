let express = require("express"),
    app = express();

const port = process.env.PORT || 3000;
const ip = process.env.IP || "127.0.0.1";


app.set('view engine', 'ejs');
app.use( express.static( "public" ) );

//=================
//landing page
//=================
app.get("/", function(req, res){
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


app.listen(port,function(){
    console.log("Server has started .... at port "+ port+" ip: "+ip);
});

// app.listen(3000, function(){
//     console.log("~Koki's webpage Started~")
// })