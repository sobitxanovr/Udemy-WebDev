const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/test", {useNewUrlParser: true})

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema)

const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
})

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number
})

const Person = mongoose.model("Person", personSchema)

const person = new Person ({
    name: "Rustam",
    age: 23,
})

//person.save()

const kiwi = new Fruit({
    name: "kiwi",
    rating: 10,
    review: "The best fruit"
})

const orange = new Fruit({
    name: "orange",
    rating: 7,
    review: "It depends"
})

const banana = new Fruit({
    name: "banana",
    rating: 8,
    review: "Good enough"
})

Fruit.insertMany([kiwi, orange, banana])
