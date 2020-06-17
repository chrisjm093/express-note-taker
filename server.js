const express = require("express");
const path = require("path");
const htmlRoutes = require ("./routes/htmlRoutes");
const apiRoutes = require ("./routes/apiRoutes");

const PORT = 3000;

const app = express();

app.use( express.static( 'public' ));
app.use( "/", apiRoutes );
app.use( "/", htmlRoutes );


app.listen(PORT, () =>  {
    console.log( `App is listening to PORT: ${PORT}` );
});