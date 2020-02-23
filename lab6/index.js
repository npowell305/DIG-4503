const Express = require("express");
const App = Express();
const port = 80;

const cors = require("cors");

const chalk = require("Chalk");
const Pokemon = require('json-pokemon');

App.use(cors());

App.get("/", Express.static("client/build"));

App.get("/name/:name", (req, res) => {
    let result = {"error": "No Pokemon Found"};
    Pokemon.forEach((value)=> {
        if(value.name == req.params.name) {
            result = value;
        }
    });

    if(result.error){
        console.log(chalk.red(req.path));
    }
    else{
        console.log(chalk.green(req.path));
        console.log(result);
    }

    res.send(result);

});

App.get("/id/:id", (req, res) => {

    let result = {"error": "No Pokemon Found"};
    Pokemon.forEach((value)=> {
        if(value.id == req.params.id) {
            result = value;
        }
    });

    if(result.error){
        console.log(chalk.red(req.path));
    }
    else{
        console.log(chalk.green(req.path));
        console.log(result);
    }

    res.send(result);
});

App.listen(port, () => {
    console.log("Server running!");
});
