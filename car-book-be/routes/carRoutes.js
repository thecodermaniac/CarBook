import express from 'express'
import * as carController from '../controller/carController.js';

const route = express.Router()

route.post('/create-car', carController.createCar);
route.get('/get-all-car', carController.getAllCar);
route.post('/book-car', carController.bookCar);
route.get('/get-book-car', carController.getBookedCar);
route.get('/singleCar/:carId', carController.getSingleCar);
route.get('single-book-car/:bookId', carController.getSingleBooking);

export default route