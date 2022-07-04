import db from '../db.js';
import { ObjectId } from 'mongodb';
import sanitizeString from '../utils/sanitizeStrings.js';

async function validateRecordId(req, res, next) {
    const id = sanitizeString(req.params.id);

    if (!id) {
        return res.sendStatus(404);
    };

    const record = await db.collection("records").findOne({ _id: new ObjectId(id) });

    if (!id) {
        return res.sendStatus(404);
    };

    res.locals.record = record;
    next();
}

export default validateRecordId;