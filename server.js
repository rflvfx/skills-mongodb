const { MongoClient, ObjectId } = require('mongodb');
const express = require('express');
const app = express();
app.use(express.json());

const client = new MongoClient('mongodb://localhost:27017');
let db;

app.get('/users', async (req, res) => res.json(await db.collection('users').find().toArray()));
app.post('/users', async (req, res) => {
  const r = await db.collection('users').insertOne(req.body);
  res.json({ _id: r.insertedId, ...req.body });
});

(async () => {
  await client.connect();
  db = client.db('app');
  app.listen(3000, () => console.log('MongoDB API em http://localhost:3000'));
})();
