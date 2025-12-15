const express = require("express")
const restaurantController = require("../controllers/restaurantController")

const restaurantRouter = express.Router();

restaurantRouter
.route("/")
.get(restaurantController.getAllRestaurants)
.post(restaurantController.createRestaurant);

restaurantRouter
.route("/:id")
.get(restaurantController.getRestaurant)
.patch(restaurantController.updateRestaurant)
.delete(restaurantController.deleteRestaurant);