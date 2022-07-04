import db from '../db.js';

async function getRecords(req, res) {
    const { user } = res.locals;

    const records = await db.collection("records").find({ userId: user._id }).toArray();

    res.send([{ user: user.name }, ...records]);
};

async function addRecord(req, res) {
    const record = req.body;
    const { user, date } = res.locals;

    record.date = date;

    await db.collection("records").insertOne({ ...record, userId: user._id });

    res.sendStatus(201);
};

async function updateRecord(req, res) {
    const newRecord = req.body;
    const { record } = res.locals;

    await db.collection("records").updateOne({
        _id: record._id
    }, {
        $set: newRecord
    });

    res.sendStatus(200);
};

async function deleteRecord(req, res) {
    const { record } = res.locals;

    await db.collection("records").deleteOne({ _id: record._id });

    res.sendStatus(200);
}

export { getRecords, addRecord, updateRecord, deleteRecord };