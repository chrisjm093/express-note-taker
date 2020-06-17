const fs = require("fs");
const util = require("util");
const path = require("path");

const readFileAsync = util.promisify(fs.readFile);

class Store {

    read() {
        return readFileAsync( path.join( __dirname, "../db/db.json" ), "utf8", ( err,data ) => {
        })
    }
    getNotes() {
            //string to obj conversion
            return this.read().then(() =>{

                return data
                    ? JSON.parse( data )
                    : [];
                
            });
       
    }

    addNote() {

        this    
            .getNotes()
            .then(( data ) => {
                console.log(data);
            })

    }

    deleteNote() {


    }



}


module.exports = new Store;
