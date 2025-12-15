const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());

const jsonData = JSON.parse(fs.readFileSync("./Data.json"));

app.use((req, res, next) => {
  const now = new Date();
  req.requestTimeOfHit = now.toLocaleString();
  next();
})

//controllers
const getAllRestaurants = (req, res) => {
  res.status(200).json({
    status: "Sucessful",
    length: jsonData.length,
    data: {
      jsonData,
    },
  });
};

const getRestaurantById = (req, res) => {
  let id = req.params.id;
  let restaurant = null;
  for (let i = 0; i < jsonData.length; i++) {
    let items = jsonData[i].card.card.itemCards;
    restaurant = items.find((el) => el.card.info.id == id);
    if (restaurant) break;
  }

  if (!restaurant) {
    return res.status(404).json({
      status: "Fail",
      message: "user not found",
    });
  }
  res.status(200).json({
    status: "success",
    restaurant,
  });
};

//get
app.get("/api/v1/rest", (req, res) => {
  res.status(200).json({
    status: "Sucessful",
    length: jsonData.length,
    data: {
      jsonData,
    },
  });
});

//Routes
app.get("/api/v1/rest", getAllRestaurants){
    app.get("/api/v1/rest/:id", getRestaurantById);
    app.post("/api/v1/rest", createRestaurant);
    app.patch("/api/v1/rest/:id", updateRestaurant);
    app.delete("/api/v1/rest/:id", deleteRestaurant);

}

app.get("/api/v1/rest/:id", (req, res) => {
  let id = req.params.id;
  let restaurant = null;
  for (let i = 0; i < jsonData.length; i++) {
    let items = jsonData[i].card.card.itemCards;
    restaurant = items.find((el) => el.card.info.id == id);
    if (restaurant) break;
  }

  if (!restaurant) {
    return res.status(404).json({
      status: "Fail",
      message: "user not found",
    });
  }
  res.status(200).json({
    status: "success",
    restaurant,
  });
});

app.listen(3001, () => {
  console.log("Server started successfully on port 3001");
});
