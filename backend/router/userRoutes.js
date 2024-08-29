import express from "express";
import {  createUser ,
          loginUser ,
          logoutCurrentUser ,
          getAllUsers ,
          getCurrentUserProfile ,
          updateCurrentUserProfile , 
          deleteUserById , 
          getUserById , 
          UpdateUserById
        } from '../controllers/userController.js';

import { authenticate , outhorizedAdmin} from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/').post(createUser).get(authenticate , outhorizedAdmin , getAllUsers);
router.post('/auth', loginUser);
router.post('/logout', logoutCurrentUser);

router.route('/profile').get(authenticate , getCurrentUserProfile).put(authenticate , updateCurrentUserProfile);

//admin route
router.route('/:id')
.delete(authenticate , outhorizedAdmin , deleteUserById)
.get(authenticate , outhorizedAdmin , getUserById)
.put(authenticate , outhorizedAdmin , UpdateUserById)

export default router ;