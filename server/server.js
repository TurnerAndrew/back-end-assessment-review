const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const ctrl = require('./controller')

app.get("/api/compliment", ctrl.getCompliment)
app.post('/api/compliment', ctrl.addCompliment)

app.get('/api/fortune', ctrl.getFortune)
app.post('/api/fortune', ctrl.addFortune)


app.get('/api/inspiration', ctrl.getInspiration)
app.post('/api/inspiration', ctrl.addInspiration)

app.get('/api/motivation', ctrl.getMotivation)
app.post('/api/motivation', ctrl.addMotivation)


app.listen(4000, () => console.log("Server running on 4000"));
