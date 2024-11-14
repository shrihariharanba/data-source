const express = require('express');
const router = express.Router();


router.get('/city', (req, res) => {
    res.status(200).json({ cities: ['Chennai', 'Bangalore', 'Delhi'] });
});


router.get('/cuisineType/:cityName', (req, res) => {
    let cityName = req.params.cityName
    if (cityName === "Chennai") {
        res.status(200).json({
            cuisineType: ['Starters', 'Meals', 'Drink']
        });
    } else if (cityName === "Bangalore") {
        res.status(200).json({
            cuisineType: ['Starters', 'Thali', 'Desserts']
        });
    } else if (cityName === "Delhi") {
        res.status(200).json({
            cuisineType: ['Welcome Drink', 'Starters', 'Thali', 'Desserts', 'Drinks']
        });
    } else {
        res.status(404).json({ message: "Data Not Foud for the City your tried" })
    }

});


module.exports = router;