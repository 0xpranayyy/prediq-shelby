import { VercelRequest, VercelResponse } from '@vercel/node';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { initDB, healthCheck } from './db/sqlite';
import { indexer } from './indexer';
import marketsRouter from './routes/markets';
import portfolioRouter from './routes/portfolio';
import usersRouter from './routes/users';

const app = express();
const PORT = parseInt(process.env.PORT || '3002');

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

// For Vercel serverless
export default async function handler(req: VercelRequest, res: VercelResponse) {
  await initDB();
  return app(req, res);
}

// For local development
if (require.main === module) {
  async function main(): Promise<void> {
    try {
      console.log('[PREDIQ] Starting backend...');

      // 1. Initialize database schema
      await initDB();

      // 2. Start indexer
      indexer.start();
      console.log('[Indexer] Started and listening for events');

      // 3. Start Express server
      app.listen(PORT, () => {
        console.log(`[API] Listening on http://localhost:${PORT}`);
      });

    } catch (error) {
      console.error('[PREDIQ] Failed to start backend:', error);
      process.exit(1);
    }
  }

  main();
}
