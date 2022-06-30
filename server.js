import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import joi from 'joi';
import bcrypt from 'bcrypt';
import uuid from 'uuid';
import { MongoClient, ObjectId } from 'mongodb';
import { stripHtml } from 'string-strip-html';

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

const mongoClient = new mongoClient(process.env.MONGO_URI);
let db;

mongoClient.connect().then(() => {
    db = mongoClient.db("my_wallet");
});

const PORT = SERVER_PORT || 5000;

server.listen(PORT);