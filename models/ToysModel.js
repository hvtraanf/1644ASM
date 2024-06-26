var mongoose = require('mongoose');
var ToysSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'brands'
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'categories'
    }
  }
);

const ToysModel = mongoose.model("toys", ToysSchema);
module.exports = ToysModel;
