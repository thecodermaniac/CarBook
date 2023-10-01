import express from 'express'
import * as userController from '../controller/userController.js';

const route = express.Router()

route.post('/sign-up-User', userController.createUser);
route.post('/sign-in-User', userController.loginUser);

export default route