import express from 'express';
import cors from 'cors';
import { db } from './firebase.js';

export const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', async (_req, res) => {
  await db.collection('health').doc('ping').set({ at: new Date() });
  res.json({ ok: true });
});
