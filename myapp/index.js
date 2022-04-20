const expres = require("express");
const app = expres();
const port = process.env.PORT || 5000;

// permission to data ohter website
var cors = require("cors");
app.use(cors());
var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello This is My Four Express Project");
});

const users = [
  {
    id: 1,
    name: "Panchanan",
    email: "kakonroy043@gmail.com",
    phone: "01707500512",
  },
  {
    id: 2,
    name: "Kakon",
    email: "kakonroy043@gmail.com",
    phone: "01707500512",
  },
  {
    id: 3,
    name: "Kakon Ray",
    email: "kakonroy043@gmail.com",
    phone: "01707500512",
  },
  {
    id: 4,
    name: "Taposi",
    email: "kakonroy043@gmail.com",
    phone: "01707500512",
  },
  {
    id: 5,
    name: "Bristi",
    email: "kakonroy043@gmail.com",
    phone: "01707500512",
  },
];

// search query
app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/users/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.post("/users", (req, res) => {
  user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "oranges"]);
});
