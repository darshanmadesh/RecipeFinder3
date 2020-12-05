const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const recipeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        slug: {
            type: String,
            unique: true,
            required: true,
            max: 50,
            index: true,
            lowercase: true,
        },
        instructions: {
            type: {},
            required: true,
            min: 20,
            max: 2000000,
        },
        user: {
            type: String,
            default: "Admin",
        },
        image: {
            type: String,
        },
        cooktime: {
            type: Number,
            required: true,
        },
        yields: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Recipe", recipeSchema);
