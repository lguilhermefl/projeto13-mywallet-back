import { Router } from 'express';
import { addRecord, deleteRecord, getRecords, updateRecord } from '../controllers/userController.js';
import validateToken from '../middlewares/tokenValidationMiddleware.js';
import validateAddRecord from '../middlewares/addRecordSchemaValidationMiddleware.js'
import validateUpdateRecord from '../middlewares/updateRecordSchemaValidationMiddleware.js';
import validateRecordId from '../middlewares/recordIdValidationMiddleware.js';

const userRouter = Router();

userRouter.use(validateToken);
userRouter.get("/records", getRecords);
userRouter.post("/records", validateAddRecord, addRecord);
userRouter.put("/records/:id", validateRecordId, validateUpdateRecord, updateRecord);
userRouter.delete("/records/:id", validateRecordId, deleteRecord);

export default userRouter;