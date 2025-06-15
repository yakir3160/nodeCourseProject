
import {Router} from "express"
import {getAllUsers,getUserById,updateUserById,deleteUser} from '../controllers/user.controller.js'

const router = Router();


router.get('/',getAllUsers)
router.get('/:id',getUserById)
router.put('/:id',updateUserById)
router.delete('/:id',deleteUser)




export default router