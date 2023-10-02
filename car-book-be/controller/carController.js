import CarModel from "../model/CarSchema.js";
import Booking from "../model/BookingSchema.js";

export const createCar = async (req, res) => {
    try {
        const { carName, carBrand, carType, carImage, description } = req.body;
        const newCar = new CarModel({
            carName,
            carBrand,
            carType,
            carImage,
            description
        })
        await newCar.save();
        res.status(200).json({
            message: 'Created successfully',
            body: newCar
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const getAllCar = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const carList = await CarModel.find({ isAvailable: true }).limit(Number(limit)).skip(Number(limit) * Number(page))
        res.status(200).json({
            success: true,
            data: carList
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const bookCar = async (req, res) => {
    try {
        const { userId, carId, singleDate, startDate, endDate } = req.body;
        const newBooking = new Booking({
            car: carId,
            customer: userId,
            singleDate,
            startDate, endDate
        })
        await newBooking.save();
        res.status(200).json({
            message: 'Successfully Booked',
            body: newBooking
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }

}

export const getBookedCar = async (req, res) => {
    try {
        const { page, limit, userId } = req.query;
        const bookList = await Booking.find({ customer: userId }).limit(Number(limit)).skip(Number(limit) * Number(page)).populate('Car')
        res.status(200).json({
            success: true,
            data: bookList
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const getSingleCar = async (req, res) => {
    try {
        const { carId } = req.params;
        const singleCar = await CarModel.findById(carId)
        res.status(200).json({
            success: true,
            data: singleCar
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const getSingleBooking = async (req, res) => {
    try {
        const { bookId } = req.params;
        const singleBooking = await Booking.findById(bookId)
        res.status(200).json({
            success: true,
            data: singleBooking
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}