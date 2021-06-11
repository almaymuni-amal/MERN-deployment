const mongoose = require("mongoose");

const PiratesSchema = new mongoose.Schema(
    {
        name: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least {MINLENGTH}"],
        },
        imgUrl: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH}"],
            },
        NumOfChests: {
            type: Number,
            required: [true, "{PATH} is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH}"],
            },
        position: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH}"],
            },
        phrase: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH}"],
            },
        isPegLeg: {
            type: Boolean,
            },
        isEyePatch: {
            type: Boolean,
                },
        isHookHand: {
            type: Boolean,
                }
    },
    { timestamps: true }
);

// const Clothes = mongoose.model("Clothes", ClothesSchema)
// module.exports = Clothes

// shorthand another way to write:
module.exports.Pirates = mongoose.model("Pirates", PiratesSchema)