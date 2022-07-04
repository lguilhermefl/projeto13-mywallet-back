import joi from 'joi';

const addRecordSchema = joi.object({
    value: joi
        .number()
        .greater(0)
        .less(1000000)
        .precision(2)
        .required(),
    description: joi
        .string()
        .max(20)
        .required(),
    date: joi
        .date()
        .timestamp()
        .required(),
    type: joi
        .string()
        .valid("income", "expense")
        .required()
});

const updateRecordSchema = joi.object({
    value: joi
        .number()
        .greater(0)
        .less(1000000)
        .precision(2)
        .required(),
    description: joi
        .string()
        .max(20)
        .required()
});

export { addRecordSchema, updateRecordSchema };