// https://mongoosejs.com/docs/guide.html
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO ERROR!!!!");
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  // Setting a max length for the string
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  // Setting a min price since we dont want price to be negative
  // Passed an error will first value is the min value and the second value as a string is the error message
  price: {
    type: Number,
    min: [0, "Price must be positive"],
  },
  // Setting default values
  onSale: {
    type: Boolean,
    default: false,
  },

  // Array of strings
  catagories: {
    type: [String],
  },
  // Object or Nested sub documents
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  // enum Creates a validator that checks if the value is in the given array.
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});

productSchema.methods.greet = function () {
  console.log("Hello");
  console.log(`-from  ${this.name}`);
};

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
};

productSchema.methods.addCatagories = function (newCat) {
  this.catagories.push(newCat);
  return this.save();
};

productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 });
};

const Product = mongoose.model("Product", productSchema);

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Bike Helmet" });
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
  await foundProduct.addCatagories("Outdoor");
  console.log(foundProduct);
};

Product.fireSale().then((res) => console.log(res));
// findProduct();

// const bike = new Product({ name: "Mountain Bike", price: 599 });
// const bike = new Product({ name: "Cycling Jersey", price: 28.99, catagories: ["Cycling", "Safety"], size: "XS" });
// bike
//   .save()
//   .then((data) => {
//     console.log("WORKED");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Oh no Error", err);
//   });

// Need to tell mongoose runValidators: true, else we will input negative price number
// Product.findOneAndUpdate({ name: "Tire Pump" }, { price: -10.99 }, { new: true, runValidators: true })
//   .then((data) => {
//     console.log("WORKED");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Oh no Error", err);
//   });

// Product.findOneAndUpdate({ name: "Bike Helmet" }, { catagories: [] }, { new: true, runValidators: true })
//   .then((data) => {
//     console.log("WORKED");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Oh no Error", err);
//   });
