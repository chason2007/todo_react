const fs = require("fs");
const jsonData = JSON.parse(fs.readFileSync("./Data.json"));

exports.createRestaurant = (req, res) => {
  const newRestaurant = req.body;
  jsonData.push(newRestaurant);
  fs.writeFileSync("./Data.json", JSON.stringify(jsonData));
  res.status(201).json({
    status: "success",
    data: {
      restaurant: newRestaurant,
    },
  });
};

exports.getAllRestaurants = (req, res) => {
  res.status(200).json({
    status: "Sucessful",
    length: jsonData.length,
    data: {
      jsonData,
    },
  });
};

exports.getRestaurantById = (req, res) => {
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

exports.updateRestaurant = (req, res) => {
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

exports.deleteRestaurant = (req, res) => {
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