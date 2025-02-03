import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  carName: {
    type: String,
    required: [true, "car name is required"],
  },
  carBrand: {
    type: String,
    required: [true, "brand name is required"],
  },
  carType: {
    type: String,
    required: [true, "car type is required"],
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  carImage: {
    type: String,
    required: [true, "car image is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  ppD: {
    type: Number,
    required: [true, "price per day is required"],
  },
  capacity: {
    type: Number,
    required: [true, "capacity is required"],
  },
});

const CarModel = mongoose.model("Car", carSchema);

export default CarModel;
