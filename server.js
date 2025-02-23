const express = require('express');
const ejsmate = require('ejs-mate');
const methodOverride = require('method-override');
const dbConnect = require('./database/db.js');
const productRoutes = require('./routes/productRoutes.js');
const path=require("path")

const app = express();

dbConnect();
app.engine('ejs', ejsmate)
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "/public")))
app.use(express.json())

app.use('/p1', productRoutes);

app.get("/", (req, res) => {
    res.render("Home/hhome", { currentPage: "home" });
});


app.listen(7000, ()=>{
    console.log('server is running at port 7000')
})