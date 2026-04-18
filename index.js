// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const app = express();
// const port = process.env.PORT || 3000;
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// app.use(cors());
// app.use(express.json());



// //coffee_monster
// //o3rCjVp9Rib4RFT9



// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.azj20jt.mongodb.net/?appName=Cluster0`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();

//    const coffeesCollection = client.db('coffeeDB').collection('coffees');

//    const usersCollection = client.db('coffeeDB').collection('users');

//    app.get('/coffees', async (req, res) => {
    
//     const result = await coffeesCollection.find().toArray();
//     res.send(result);
//    });

//    app.get('/coffees/:id', async (req, res) => {
//     const id = req.params.id;
//     const query = { _id: new ObjectId(id) };
//     const result = await coffeesCollection.findOne(query);
//     res.send(result);
//    });


//    app.post('/coffees', async (req, res) => {
//       const newCoffee = req.body;
//       const result = await coffeesCollection.insertOne(newCoffee);
//       res.send(result);
      
//     });

//     app.put('/coffees/:id', async (req, res) => {
//       const id = req.params.id;
//       const options = { upsert: true };
//       const filter = { _id: new ObjectId(id) };
//       //const updatedCoffee = req.body;
//       const updatedDoc = {
//         $set: req.body
//       };
//       const result = await coffeesCollection.updateOne(filter, updatedDoc, options);
//       res.send(result);
//     });


//     app.delete('/coffees/:id', async (req, res) => {
//       const id = req.params.id;
//       const query = { _id: new ObjectId(id) };
//       const result = await coffeesCollection.deleteOne(query);
//       res.send(result);
//     });
          


    

//     //user related apis

//     app.get('/users', async (req, res) => {
//       const result = await usersCollection.find().toArray();
//       res.send(result);
//     });

//     app.get('/users/:id', async (req, res) => {
//       const id = req.params.id;
//       const query = { _id: new ObjectId(id) };
//       const result = await usersCollection.findOne(query);
//       res.send(result);
//     });

   

//     app.delete('/users/:id', async (req, res) => {
//       const id = req.params.id;
//       const query = { _id: new ObjectId(id) };
//       const result = await usersCollection.deleteOne(query);
//       res.send(result);
//     });

//     app.post('/users', async (req, res) => {
//       const newUser = req.body;
//       const result = await usersCollection.insertOne(newUser);
//       res.send(result);
//     });

//     app.patch('/users', async (req, res) => {
//       console.log(req.body);
//       const {email,lastSignInTime,}= req.body;
//       const filter= {email :email}
//       const updatedDoc ={
//          $set:{
//              lastSignInTime:lastSignInTime
//          }
//       }
//       const result = await usersCollection.updateOne(filter, updatedDoc);
//       res.send(result);
//     });

//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);



// app.get('/', (req, res) => {
//   res.send('coffee management server is getting hotter!');
// });

// app.listen(port, () => {
//   console.log(`coffee management server is running on port: ${port}`);
// });

// ===========================================================

/* const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.azj20jt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    // await client.connect(); // Optional in newer MongoDB versions

    const coffeesCollection = client.db('coffeeDB').collection('coffees');
    const usersCollection = client.db('coffeeDB').collection('users');

    // --- Coffee Routes ---
    app.get('/coffees', async (req, res) => {
      const cursor = coffeesCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeesCollection.findOne(query);
      res.send(result);
    });

    app.post('/coffees', async (req, res) => {
      const newCoffee = req.body;
      const result = await coffeesCollection.insertOne(newCoffee);
      res.send(result);
    });

    app.put('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: req.body
      };
      const result = await coffeesCollection.updateOne(filter, updatedDoc, options);
      res.send(result);
    });

    app.delete('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeesCollection.deleteOne(query);
      res.send(result);
    });

    // --- User Routes ---
    app.get('/users', async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    app.post('/users', async (req, res) => {
      const newUser = req.body;
      const result = await usersCollection.insertOne(newUser);
      res.send(result);
    });

    app.patch('/users', async (req, res) => {
      const { email, lastSignInTime } = req.body;
      const filter = { email: email };
      const updatedDoc = {
        $set: { lastSignInTime: lastSignInTime }
      };
      const result = await usersCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });

    // Ping check
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged: Successfully connected to MongoDB!");
  } catch (error) {
    console.error("Connection error:", error);
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Coffee management server is running!');
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

 */


const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.azj20jt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // In Vercel, we don't strictly need client.connect() here 
    // because the driver handles it on the first request.
    
    const database = client.db('coffeeDB');
    const coffeesCollection = database.collection('coffees');
    const usersCollection = database.collection('users');

    // --- Coffee Routes ---
    app.get('/coffees', async (req, res) => {
      const result = await coffeesCollection.find().toArray();
      res.send(result);
    });

    app.get('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeesCollection.findOne(query);
      res.send(result);
    });

    app.post('/coffees', async (req, res) => {
      const result = await coffeesCollection.insertOne(req.body);
      res.send(result);
    });

    app.put('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = { $set: req.body };
      const result = await coffeesCollection.updateOne(filter, updatedDoc, options);
      res.send(result);
    });

    app.delete('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeesCollection.deleteOne(query);
      res.send(result);
    });

    // --- User Routes ---
    app.get('/users', async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    app.post('/users', async (req, res) => {
      const result = await usersCollection.insertOne(req.body);
      res.send(result);
    });

    app.patch('/users', async (req, res) => {
      const { email, lastSignInTime } = req.body;
      const filter = { email: email };
      const updatedDoc = { $set: { lastSignInTime: lastSignInTime } };
      const result = await usersCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });

    console.log("MongoDB Collections Initialized");
  } catch (error) {
    console.error("Database initialization error:", error);
  }
  // CRITICAL: Notice there is NO 'finally { await client.close() }' here.
  // We want the connection to remain open for Vercel to reuse.
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Coffee management server is running!');
});

// For local testing
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server running locally on port: ${port}`);
  });
}

// Export for Vercel
module.exports = app;

