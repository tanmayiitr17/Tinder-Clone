import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Cards from "./dbCards.js";

// App config

const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://admin:7380372574@cluster0.zpg3feg.mongodb.net/?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

// API endpoint

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

// });
app.post("/tinder/cards", async (req, res) => {
  try {
    const dbCard = req.body;
    const data = await Cards.create(dbCard);
    res.status(201).send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.get("/tinder/cards", async (req, res) => {
  try {
    const data = await Cards.find();
    console.log(data);
    res.status(200).send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Listener

app.listen(port, () => console.log(`Listening on localhost:${port}`));
