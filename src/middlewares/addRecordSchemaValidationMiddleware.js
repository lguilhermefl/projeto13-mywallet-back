import { addRecordSchema } from '../schemas/userSchemas.js';
import sanitizeString from '../utils/sanitizeStrings.js';

async function validateAddRecord(req, res, next) {
    const record = {
        value: Number(sanitizeString(req.body.value)),
        description: sanitizeString(req.body.description),
        date: Number(sanitizeString(req.body.date)),
        type: sanitizeString(req.body.type)
    };

    const validation = addRecordSchema.validate(record);

    if (validation.error) {
        return res.sendStatus(422);
    };

    const { date } = validation.value;

    res.locals.date = date;
    next();
};

export default validateAddRecord;
