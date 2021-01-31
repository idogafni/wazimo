const Permission = require("../models/permission");
const mongoose = require("mongoose");
const dbo = mongoose.connection;

exports.getData = function(req, res) {
    const users = [
        {id: 'u1', email: 'ido@wazimo.com', screens: [
            {id: 's1', name: 'home'},
            {id: 's2', name: 'accounts'},
            {id: 's3', name: 'campaign'}
        ]},
        {id: 'u2', email: 'adi@wazimo.com', screens: [
            {id: 's1', name: 'home'},
            {id: 's2', name: 'accounts'}
        ]},
        {id: 'u3', email: 'lena@wazimo.com', screens: [
            {id: 's1', name: 'home'}
        ]}
    ];
    res.send({ users: users});
}

// add or update permission for screen to user 
exports.setWebsites = function(req, res) {
    if (!req.body.id || !req.body.screen) {
        res.send("Missing info or screen to add");
    }
    const userId = req.body.id;
    const screen = req.body.screen;
    res.status(201);
    const permission = new Permission();
    permission.screens = [...permission.screens, screen];
    permission.save(function(err) {
        if (err) {
          return next(err);
        }
        res.send("Screen Added successfully");
      });
}

// delete a perission for screen for a user 
exports.deleteWebsite = function(req, res) {
    if (!req.body.id || !req.body.screen) {
        res.send("Missing info or screen to delete");
    }
    const userId = req.body.id;
    const screen = req.body.screen;
    
}