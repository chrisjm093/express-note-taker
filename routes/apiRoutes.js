const router = require("express").Router();
const path = require("path");
const store = require("./../db/store");


router.get("/notes", (req, res) => {

    store.getNotes().then( (notes) =>{
       
        res.json(notes);

        console.log('READ Notes')
    })

});

router.post("/api/notes", (req, res) => {
    store.getNotes().then( (notes) =>{
       
       
        console.log('CREATE Notes');
    })
});

router.delete("/api/notes/:id", (req, res) =>{
    //tbd

    console.log( 'DELETE Notes' );
});

module.exports = router;