// require express NPM package
var express = require("express");



// create router for the app

var router = express.Router();

// import burger.js file
var burger = require("../models/burger.js");

router.get("/", (req,res) => {
    res.redirect("/burgers");
});
  
router.get("/burgers", (req,res) => {
    burger.all((data) => {
        var burgerObject = { burgers:data };
        res.render("index",burgerObject);
    });
});

router.post("/burgers/add", (req,res) => {
    burger.insertOne("burger_name", req.body.burger_name, () => {
        res,redirect("/burgers");
    });
});

router.put("/burgers/devour/:id", (req,res) => {
    var condition = "id = " + req.params.id;
    burger.update({ devoured: req.body.devoured },condition, () => {
        res.redirect("/burgers");
    });
});



// export burgers_controller.js file
module.exports = router;
