const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const permissionRouter = require["./server/routes/permissions"];

const app = express();

// Set up mongoose connection
const mongoDB = "mongodb://localhost:27017/RealTimeSocketsV2";
// mongoose.set("useFindAndModify", false);
mongoose.connect(mongoDB, { useNewUrlParser: true });
// mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.disable('etag');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use("/permission", permissionRouter);

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


app.use(express.static('dist'));
app.get('/api/getData', (req, res) => res.send({ users: users}));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
