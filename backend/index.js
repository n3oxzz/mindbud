import express from "express"
import ImageKit from "imagekit";
import cors from 'cors'


const port = process.env.PORT || 3000;
const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL
}))

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGEKIT_ENDPOINT,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

app.get('/api/upload', (req, res) => {
  try {
    const auth = imagekit.getAuthenticationParameters(); // {signature, token, expire}
    res.json(auth);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to create auth params' });
  }
});

app.listen(port, ()=>{console.log(`Server Running on ${port}`)})