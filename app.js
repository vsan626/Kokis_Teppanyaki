let express = require("express"),
    app = express();

app.set('view engine', 'ejs');
app.use( express.static( "public" ) );

//=================
//landing page
//=================
app.get("/", function(req, res){
    res.render("index");
})




app.listen(3000, function(){
    console.log("~Koki's webpage Started~")
})