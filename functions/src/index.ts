import * as functions from 'firebase-functions';

const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.post('/post', (req, res) => {
  res.status(200).json({status: "Everything is ok!"});
});

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const uploadImg = functions.https.onRequest(app);
