// API handler exports for serverless deployment
import express from 'express';
import cors from 'cors';
import { initDB, healthCheck } from './db/sqlite';
import marketsRouter from './routes/markets';
import portfolioRouter from './routes/portfolio';
import usersRouter from './routes/users';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', async (req, res) => {
  try {
    const result = await healthCheck();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Health check failed' });
  }
});

app.use('/api/markets', marketsRouter);
app.use('/api/portfolio', portfolioRouter);
app.use('/api/users', usersRouter);

export default app;
