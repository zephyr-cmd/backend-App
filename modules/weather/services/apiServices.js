const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const axios = require("axios");
// const RestaurantsModel=require("../../../model/restaurant");

// const addRestaurantSer=async(req)=>{
const getWeatherSer = async (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { counter_initial, counter_final } = req.body;
            console.log("reso--->", req.body);
            console.log("res inidaiato--->", counter_initial);
            console.log("res inidfinaldaiato--->", counter_final);
            console.log("changes----->");
            let first_hit = req.body.first_hit;
            let counter = 0;
            let { data } = await axios.get(
                `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
            );
            // console.log("result----->", data.hourly);
            // console.log("first_hit--", req.body.first_hit)
            // let new_data;
            // if (first_hit) {
            //     console.log("inside teh fors")
            //     let { data } = await axios.get(
            //         `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`)
            //     new_data = data;
            // }

            // console.log(new_data);
            // const temp_data = new_data.hourly;
            const temp_data = data.hourly;
            let time = [];
            let relativehumidity_2m = [];
            let temperature_2m = [];
            for (let count = counter_initial; count < counter_final; count++) {
                console.log("inside the array---->")
                time.push(temp_data.time[count]);
                relativehumidity_2m.push(temp_data.relativehumidity_2m[count]);
                temperature_2m.push(temp_data.temperature_2m[count]);
            }

            return resolve({
                status: 200,
                message: "Successfully fetch weather",
                data: {
                    time,
                    relativehumidity_2m,
                    temperature_2m
                }
            })
        } catch (err) {
            console.log("error--->", err);
            return reject({
                status: 503,
                message: err.message,
                data: err
            })
        }
    })
}
const fetchWeatherSer = async (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { counter_initial, counter_final } = req.body;
            console.log(req.body)
        } catch (err) {
            console.log("error--->", err);
            return reject({
                status: 503,
                message: err.message,
                data: err
            })
        }
    })
}

module.exports = { getWeatherSer, fetchWeatherSer }