import express from 'express';
import path from 'path';
import { ENV } from './lib/env.js';
import { connectDB } from './lib/db.js';
const app = express();

app.use(express.json());
// credentials:true meaning?? => server allows a browser to include cookies on request
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(clerkMiddleware()); // this adds auth field to request object: req.auth()

app.use("/api/inngest", serve({ client: inngest, functions }));



app.get('/health', (req, res) => {
  res.status(200).json({ msg: 'api is up and running' });
});
app.get('/books', (req, res) => {
  res.status(200).json({ msg: 'this is the books endpoint' });
});

// make ready deployment
if (ENV.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  app.get('/{*any}', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
  });
}

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
<<<<<<< HEAD
  connectDB();
});
=======
});
>>>>>>> 5d4550395adacdee40365e0d7dce801fa7ba066e
