import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
    car: {
        type: mongoose.Types.ObjectId,
        ref: 'Car'
    },
    customer: {
        type: mongoose.Types.ObjectId,
        ref: 'Customer'
    },
    singleDate: {
        type: Date,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    }
})

const Booking = mongoose.model('Booking', bookingSchema)

export default Booking;