import { updateRecordSchema } from '../schemas/userSchemas.js';
import sanitizeString from '../utils/sanitizeStrings.js';

async function validateUpdateRecord(req, res, next) {
    const record = {
        value: Number(sanitizeString(req.body.value)),
        description: sanitizeString(req.body.description)
    };

    const validation = updateRecordSchema.validate(record);

    if (validation.error) {
        return res.sendStatus(422);
    };

    next();
};

export default validateUpdateRecord;