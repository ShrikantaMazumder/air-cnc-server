const express = require('express');
const app = express();


// connection

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbUser:pirate-506871-john@cluster0-gbyyk.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("airCNC").collection("booking");
  // perform actions on the collection object
  collection.insertOne({a:1}, (err, res) => {
    console.log(err,res);
    
  });
  client.close();
});



const users = ['Rahim', 'Karim', 'Jewel', 'Sohel', 'Koyel', 'Payel'];
// Homepage api
app.get('/', (req, res) => {
  res.send('Hello Air-CNC Serve');
})

// Dynamic url
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;

  if (userId < users.length) {
    res.send(users[userId]);
  } else {
    res.send('No User Matched');
  }
});

app.listen(3145, () => console.log('Listening to 3145'));