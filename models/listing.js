const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const listingSchema = new Schema({
    title: {
       type: String,
       required: true
    },
    description: String,
    price: Number,
    image: {
        filename: {
            type: String,
            default: "listingimage"
        },
        url: {
            type: String,
            default: "https://wallpapercave.com/wp/VeUtzwn.jpg",
            set: (v) => v === "" ? "https://wallpapercave.com/wp/VeUtzwn.jpg" : v
        }
    },
    location: String,
    country: String,
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
